function clearName() {
    if (document.getElementById('nameField').value == 'Give a suggestion') {
        document.getElementById('nameField').value = '';
    }
}
function resetName() {
    if (document.getElementById('nameField').value == '') {
        document.getElementById('nameField').value = 'Give a suggestion';
    }
}
function clearName1() {
    if (document.getElementById('nameField1').value == 'Whats your question?') {
        document.getElementById('nameField1').value = '';
    }
}
function resetName1() {
    if (document.getElementById('nameField1').value == '') {
        document.getElementById('nameField1').value = 'Whats your question?';
    }
}
function clearEmail1() {
    if (document.getElementById('emailField1').value == 'youremail@gmail.com') {
        document.getElementById('emailField1').value = '';
    }
}
function resetEmail1() {
    if (document.getElementById('emailField1').value == '') {
        document.getElementById('emailField1').value = 'youremail@gmail.com';
    }
}
function clearEmail() {
    if (document.getElementById('emailField').value == 'youremail@gmail.com') {
        document.getElementById('emailField').value = '';
    }
}
function resetEmail() {
    if (document.getElementById('emailField').value == '') {
        document.getElementById('emailField').value = 'youremail@gmail.com';
    }
}

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('transparent');
    } else {
      $('nav').removeClass('transparent');
    }
  });


// Figure out how to do the hover thing for the images of the people
function person1() {
    document.getElementById('myImage')
      .src = "updated photos/Alayna-Zayb.jpg";
    document.getElementById('message')
      .innerHTML = "Alayna Zayb";
    document.getElementById('info')
      .innerHTML = "Hey Everyone! Im Alayna Zayb, your president this year for Asian Club. I am excited to host our cherished annual events as well as introduce new and exciting events to the community! I have been in Asian Club since sophomore year, and each year since I have always enjoyed the cultural celebrations and made unforgettable memories with my friends. My goal is to extend the same joy to everyone else attending club activities and events. As your president, I cant wait to make this 2023-2024 year the best one yet! 524azayb@frhsd.com ";
  }
  
  function person2() {
    document.getElementById('myImage')
      .src = "updated photos/Anika-Bhatt.jpg";
    document.getElementById('message')
      .innerHTML = "Anika Bhatt";
    document.getElementById('info')
      .innerHTML = "Hi! I am Anika Bhatt, your senior vice president for the 2023-2024 school year for Asian Club. I am excited to create new events, teach others about our unique culture, and have a lot of fun! Being in Asian Club for all 4 years of high school have been amazing as I have met so many new people, made many several new friends, and had the best memories in this club. Our amazing board has put countless hours into creating new events and we want this year to be the best one yet! As your senior vice president, it is my job to ensure that being in Asian Club is one of the highlights of your year! 524abhatt@frhsd.com" ;
  }

  function person3() {
    document.getElementById('myImage')
      .src = "updated photos/Ann-Alex.jpg";
    document.getElementById('message')
      .innerHTML = "Ann Alex";
    document.getElementById('info')
      .innerHTML = "Hello! I am Ann, the Junior Vice President this year! I have been in Asian Club since freshman year and fell in love with everything about it.From the friends I have made, experiences I shared, and the things I have learned, I hope to share that with you. Asian Club has always been about understanding the vibrant culture of Asia, whether that be learning or simply experiencing some of the traditions.  I am excited to host all of our recurring and new events and hope to see you there! I am thrilled to be apart of this years board, and excited to make this year as memorable as possible! 525aalex@frhsd.com";
  }

  function person4() {
    document.getElementById('myImage')
      .src = "updated photos/Madelinh-Weiner.png";
    document.getElementById('message')
      .innerHTML = "Madelinh Weiner";
    document.getElementById('info')
      .innerHTML = "Hello everyone! In my role as the Secretary of the Asian Club, I'm thrilled to kick off this academic year with excitement and anticipation. As a senior, I'm excited about the possibilities that lie ahead for our club. Over the years, the Asian Club has been a source of unity and cultural richness, and I'm committed to making this final year a memorable one for all of us. Let's have a great year with plenty more to come! madelinhgrace@gmail.com";
  }

  function person5() {
    document.getElementById('myImage')
      .src = "updated photos/Annika-Bhatia.jpg";
    document.getElementById('message')
      .innerHTML = "Annika Bhatia";
    document.getElementById('info')
      .innerHTML = "Hi everyone! My name is Annika Bhatia and I am the treasurer of Asian club this year. I have been a part of Asian Club since my sophomore year, and I cannot wait to share with you all what we have planned this year! Asian Club has always been an amazing community to be a part of because of how inclusive we are of all Asian cultures. Now as a senior, I am excited to make this years Asian Club the best one yet and create endless memories with you all! 524abhatia@frhsd.com ";
  }

  function person6() {
    document.getElementById('myImage')
      .src = "updated photos/Alayna-Lee.jpg";
    document.getElementById('message')
      .innerHTML = "Alayna Lee";
    document.getElementById('info')
      .innerHTML = "Hi everyone! As the marketing director for Asian Club this year, I am so excited to take part in promoting all of the events that celebrate our Asian cultures. As this club allows for a safe space for everyone to learn and embrace the Asian traditions and lifestyles we observe, I am thrilled to be part of publicizing these goals towards others in our community. I am looking forward to making this a memorable year in Asian club, and I hope you are too! 524alee@frhsd.com";
  }

  function person7() {
    document.getElementById('myImage')
      .src = "updated photos/James-Wang.png";
    document.getElementById('message')
      .innerHTML = "James Wang";
    document.getElementById('info')
      .innerHTML = "Hi everyone! In my role as the communications director for the Asian Club this year, I am so thrilled about the upcoming events that will be vibrant celebrations of our diverse asian cultures. Our club is a home for all who wish to embrace the beauty of Asian traditions, fostering an environment of learning and appreciation! I am genuinely excited to promote these goals within our community and create lasting memories that will define this year in the club. 524jwang@frhsd.com ";
  }

  function person8() {
    document.getElementById('myImage')
      .src = "updated photos/Niru-Gupta.png";
    document.getElementById('message')
      .innerHTML = "Niru Gupta";
    document.getElementById('info')
      .innerHTML = "Hey!! As an Art Director of the Asian Club, I’m delighted to work with the Asian Art Committee to make all the beautiful decorations and art work for the club. It brings so much joy and pride to see the final products displayed at the wonderful and exciting events hosted by Asian Club. I work with the other board members, and we are all dedicated to making each event special and memorable. 524agupta@frhsd.com"
  }

  function person9() {
    document.getElementById('myImage')
      .src = "updated photos/Sydney-Yuen.png";
    document.getElementById('message')
      .innerHTML = "Sydney Yuen";
    document.getElementById('info')
      .innerHTML = "Hi! My name is Sydney Yuen and I am the Junior Art Director for Asian Club this year. I have been in Asian Club for the past two years of highschool and I am looking forward for another one! Working with the art committee has been such a joy so far and I cannot wait for more. I am so excited help decorate all the exciting new events we have planned for the rest of this year! 525syuen@frhsd.com";
  }