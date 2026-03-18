# pronto
dobry wieczór/dzień panie michale!
nie było mnie na zadaniu "darknet investigation", więc tutaj jest co udało mi się ugotować
<details>
<summary>spoiler warning</summary>
  
do wygenerowania odpowiedzi ostatniego zadania został użyty salt 
```
CRYPT_SALT=abcdefg-wawawawawawawa
```
taki sam jak w `.env.example`

</details>

<details>
<summary>tutoriaeeeeel</summary>

## level 0
no chyba wiadomo

## level 1
zmienić parametr w URL na level=2

## level 2
w HTML znajduje się komentarz `AQZXDFGYHYUTYVB` którego zawartość należy wkleić jako parametr URL level=

## level 3
w CSS strony znajduje się zmnienna `--key-0x859`, na stronie należy podać kod `0x859`

## level 4
zamienić GET w formularzu na POST

## level 5
znaleść URL zdjęcia zamieszczonego w poście, usunąć nazwę pliku z tego URL (czyli iść na `/image/`)

## level 6
pobrać ten zepsuty plik

przeczytać `instructions.jpg` i wywnioskować że chodzi o plik `/robots.txt`

`/robots.txt` zabrania `/decrypt0r`

tam wkleić zawartość zepsutego pliku, podać klucz z instrukcji (`ACK11246`)

stronka wypluwa base64 zdjęcia, które po przekonwertowaniu pokazuje gratulacje
</details>
