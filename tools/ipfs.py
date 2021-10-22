"""
Generate IPFS folder from images and upload it
"""
from pathlib import Path
import os
import json
from subprocess import check_output


def setup(name):
    check_output(['rm', '-rf', name])
    check_output(['mkdir', name])


if __name__ == '__main__':
    folderName = 'azul'
    setup(folderName)

    files = []

    for p in Path('../images').iterdir():
        if p.is_file() and p.name.endswith('.svg'):
            with open(p) as f:
                svg_content = f.read()

            name = p.name[:-4]

            metadata = {
                "name": f"Tile: {name}",
                "description": f"Aurora@Nearcon. Tile: {name}",
                "image": 'data:image/svg+xml;charset=UTF-8,' + svg_content
            }

            fileName = f'{name}.json'
            files.append(fileName)

            with open(os.path.join(folderName, fileName), 'w') as f:
                json.dump(metadata, f)

    res = check_output(['ipfs', 'add', '-wr', folderName])

    ipfsFolder = res.decode().split()[-1]
    files.sort()

    for file in files:
        print(f'/ipfs/{ipfsFolder}/{folderName}/{file}')
