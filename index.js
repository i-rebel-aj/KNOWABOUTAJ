const carouselText = [
    {text: "Apple", color: "red"},
    {text: "Orange", color: "orange"},
    {text: "Lemon", color: "yellow"}
  ]
  
  $( document ).ready(async function() {
    carousel(carouselText, "#feature-text")
  });

  $( document ).ready(async function() {
    writeCode()
  });
  async function typeSentence(sentence, eleRef, delay = 100) {
    console.log(sentence)
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }
  
  async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }
  
  async function carousel(carouselList, eleRef) {
      var i = 0;
      while(true) {
        updateFontColor(eleRef, carouselList[i].color)
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++
        if(i >= carouselList.length) {i = 0;}
      }
  }
  
  function updateFontColor(eleRef, color) {
    $(eleRef).css('color', color);
  }
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async function writeCode(){
      const codeSection1="console"
      const codeSection2=".log"
      const openingBracket="("
      const message="\"Hey There!\""
      const closingBracket=")"
      //To Print Console.log()
      updateFontColor("#feature-code1", 'aqua')
      await typeSentence(codeSection1,"#feature-code1")
      updateFontColor("#feature-code2", 'yellow')
      await typeSentence(codeSection2,"#feature-code2")
      updateFontColor("#feature-opBracket", 'white')
      await typeSentence(openingBracket,"#feature-opBracket")
      updateFontColor("#feature-msg", 'green')
      await typeSentence(message,"#feature-msg")
      updateFontColor("#feature-clBracket", 'white')
      await typeSentence(closingBracket,"#feature-clBracket")
      clearBlink('code-cursor')
      writeIntro()
  }
  function clearBlink(id){
      const cursor=document.getElementById(id)
      cursor.remove()
  }
  async function writeIntro(){
      console.log('Write Intro is called')
      let aboutElement=document.getElementById('about-container')
      aboutElement.innerHTML='<span class="input-cursor" id="about-cursor"></span>'
      console.log(aboutElement)
      const message=[
          {
              text: "I am ",
              color: 'white'
          },
          {
            text: " Akshay Jain",
            color: 'orange'
          },
          {
            text: ", final year computer science undergrad at ",
            color: 'white'
          },
          {
            text: "the Indian Institute of Information Technology, Guwahati. ",
            color: '#9797f9'
          },
          {
            text:"I have been a",
            color: 'white'
          },
          {
            text:" MERN stack developer ",
            color: "#13aa52"
          },
          {
            text:"for the past ",
            color: "white"
          },
          {
            text:"2 Years",
            color: "#ec72ac"
          },
          {
                text:" and I am currently looking for job opportunities for the role of a",
                color: 'white'
          },
          {
              text:" Software Developer",
              color: '#f18888'
          }
      ]
      i=0
      for (const msg of message) { 
          let newTag=document.createElement('span')
          newTag.id=`about${i}`
          //$(`<span id="about${i}"></span>`)
          aboutElement.insertBefore(newTag, document.getElementById('about-container').lastChild)
          updateFontColor(`#about${i}`, msg.color)
          await typeSentence(msg.text, `#about${i}`, 50)
          i++;
      }
      clearBlink('about-cursor')
  }