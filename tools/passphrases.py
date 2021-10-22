"""
Generate passphrases

- Create txt with all passphrases
- Create pdf with all QR codes with passphrases
"""

import sys
import random
from reportlab.lib.units import mm
from reportlab.pdfgen.canvas import Canvas
from reportlab_qrcode import QRCodeImage


ROWS = 4
COLS = 3
PREFIX = 'aurora-is-near-'


def generate_passphrases(seed, total):
    rnd = random.Random(seed)

    return [
        f'{PREFIX}{rnd.randint(0, 2**64):020}' for _ in range(total)
    ]


def generate_canvas(passphrases):
    doc = Canvas('qr.pdf')

    side = 60
    xside = side + 2

    pnt = 0
    for _ in range(len(passphrases) // (ROWS * COLS)):
        for i in range(COLS):
            for j in range(ROWS):
                if pnt < len(passphrases):
                    qr = QRCodeImage(
                        f'https://nearcon.aurora.dev/?pass={passphrases[pnt]}', size=side * mm)
                    qr.drawOn(doc, i * xside * mm, j * xside * mm)
                    pnt += 1
        doc.showPage()
    doc.save()


def generate_txt(passphrases):
    with open('pass.txt', 'w') as f:
        for p in passphrases:
            print(p, file=f)


if __name__ == '__main__':
    try:
        seed = sys.argv[1]
        num_passphrases = int(sys.argv[2])
    except:
        print("Invalid input. Pass seed and number of passphrases.")
        print("python3 passphrases.py <seed> <number_of_passphrases>")
        exit(0)

    passphrases = generate_passphrases(seed, num_passphrases)

    generate_canvas(passphrases)
    generate_txt(passphrases)
