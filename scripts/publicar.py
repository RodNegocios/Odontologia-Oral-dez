"""Atualiza a raiz publicada por Git e o ZIP a partir do mesmo build Vite."""
from pathlib import Path
from shutil import copy2
from zipfile import ZIP_DEFLATED, ZipFile

project = Path(__file__).resolve().parents[1]
build = project / "dist"
archive = project / "publicacao" / "Oral-Dez-Hostinger.zip"
if not (build / "index.html").is_file():
    raise SystemExit("Execute npm run build antes de preparar a publicação.")

files = sorted(path for path in build.rglob("*") if path.is_file())
entries = {source.relative_to(build).as_posix(): source for source in files}
previous = set()
up_to_date = False
if archive.exists():
    with ZipFile(archive) as bundle:
        previous = set(bundle.namelist())
        up_to_date = previous == entries.keys() and all(
            bundle.read(name) == source.read_bytes() for name, source in entries.items()
        )

for name, source in entries.items():
    target = project / name
    target.parent.mkdir(parents=True, exist_ok=True)
    copy2(source, target)

if not up_to_date:
    temporary = archive.with_suffix(".tmp")
    with ZipFile(temporary, "w", ZIP_DEFLATED) as bundle:
        for name, source in entries.items():
            bundle.write(source, name)
    temporary.replace(archive)

# Limpa apenas artefatos antigos previamente gerados no diretório assets/.
for target in (project / "assets").iterdir():
    name = target.relative_to(project).as_posix()
    if name in previous and name not in entries and target.is_file():
        target.unlink()
