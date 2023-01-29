function generate(){
    var quotes = {
     "- Albert Einstein" : '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty."',
     "- Madeline Miller" : '"Bury us, and mark our names above. Let us be free."',
     "- Aaron Lauristen" : '"There is strange comfort in knowing that no matter what happens today, the Sun will rise again tomorrow."',
     "- Mary Astell" : '"If all men are born free, how is it that all women are born slaves?"',
     "- Monique Duval" : '"She decided to free herself, dance into the wind, create a new language. And birds fluttered around her, writing “yes” in the sky."',
     "- C.S Lewis" : '"I was not born to be free---I was born to adore and obey."',
     "- John Galsworthy" : '"Life calls the tune, we dance."',
     "- Jenny Valentine" : '"Even when you had lost everything you thought there was to lose, somebody came along and gave you something for free."',
     "- Anne Morrow Lindbergh" : '"Him that I love, I wish to be free -- even from me."',
     "- Jamie Ford" : '"The library is like a candy store where everything is free."',
     "- Nenia Campbell" : '"You want to be free. You also want to be mine. You cant be both."',
     "- Lauren DeStefano" : '"But there is no such thing as free. There are only different and more horrible ways to be enslaved."'

    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;

    document.getElementById("author").innerHTML = author;
}

