

function Book(dasaxeleba,avtori,weli,Janri,gamomcemloba,fasi,url)
          {
            this.dasaxeleba   = dasaxeleba;
            this.avtori       = avtori;
            this.weli         = weli;
            this.Janri        = Janri;
            this.gamomcemloba = gamomcemloba;
            this.fasi        = fasi;
            this.url         = url;
          }

var books = [];
        books[0] = new Book("ვეფხისტყაოსანი"
                              ,"შოთა რუსთაველი"
                              ,"1978"
                              ,"პოემა"
                              ,"განათლება"
                              ,"5,50"
                              ,"Style/images/vefxistyaosani.jpg");
        books[1] = new Book("სამოსელი პირველი",
                            "გურამ დოჩანაშვილი",
                            "2007",
                            "პროზა",
                            "აისი",
                            "5,0",
                            "Style/images/samoseli_resize.jpg");
        books[2] = new Book("დიდოსტატის მარჯვენა"
                              ,"კონსტანტინე გამსახურდია"
                              ,"1968"
                              ,"პროზა"
                              ,"საქართველოს მაცნე"
                              ,"13,5"
                              ,"Style/images/didostati.jpg");
        books[3] = new Book("იგი"
                              ,"ჯემალ ქარჩხაძე"
                              ,"1983"
                              ,"პროზა"
                              ,"საბჭოთა საქართველო"
                              ,"1,65"
                              ,"Style/images/igi.jpg");
        books[4] = new Book("ლექსები"
                              ,"მუხრან მაჭავარიანი"
                              ,"1983"
                              ,"პოეზია"
                              ,"საბჭოთა საქართველო"
                              ,"1.70"
                              ,"Style/images/muxrani.jpg");
        books[5] = new Book("თავისქალა არტისტული ყვავილებით"
                              ,"გალაკტიონ ტაბიძე"
                              ,"1982"
                              ,"მოგზაურობა"
                              ,"ნაკადული"
                              ,"0.60"
                              ,"Style/images/taviskala.jpg");
        books[6] = new Book("კაცია ადამიანი?!"
                              ,"ილია ჭავჭავაძე"
                              ,"1977"
                              ,"პროზა"
                              ,"საბჭოთა საქართველო"
                              ,"2.60"
                              ,"Style/images/kaciaadamiani.jpg");
        books[7] = new Book("ჯაყოს ხიზნები"
                              ,"მიხეილ ჯავახიშვილი"
                              ,"1991"
                              ,"დიდაქტიკა"
                              ,"განათლება"
                              ,"27.00"
                              ,"Style/images/jayo.png");
        books[8] = new Book("სამი მუშკეტერი"
                              ,"ალექსანდრე დიუმა"
                              ,"1963"
                              ,"პოეზია"
                              ,"საბჭოთა საქართველო"
                              ,"13.7"
                              ,"Style/images/mushketeri.jpg");



function find_book() {

dasaxeleba = document.getElementById("dasaxeleba").value;

for( var j = 0; j < books.length; j++){

  if( dasaxeleba == books[j].dasaxeleba ){
      alert(books[j].avtori);
        }
    }
}


function add_book()
  {


    if(document.getElementById("r_dasaxeleba").value.length == 0)
      {
         alert("გთხოვთ შეავსოთ დასახელების ველი!");
      }
    else if(document.getElementById("autor").value.length == 0)
      {
       alert("გთხოვთ შეავსოთ ავტორის ველი!");
      }
    else if(document.getElementById("Janri").selectedIndex == 0)
      {
         alert("გთხოვთ მიუთითოთ ჟანრი!");
      }

      else{alert("შეკვეთა გადაცემულია, წიგნი მალე დაემატება, დარჩით სახლში!")}


  }
