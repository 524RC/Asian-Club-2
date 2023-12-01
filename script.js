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
      .src = "Mask group (2).png";
    document.getElementById('message')
      .innerHTML = "Alayna Zayb";
    document.getElementById('message1')
      .innerHTML = "Hey Everyone! Im Alayna Zayb, your president this year for Asian Club. I am excited to host our cherished annual events as well as introduce new and exciting events to the community! I have been in Asian Club since sophomore year, and each year since I have always enjoyed the cultural celebrations and made unforgettable memories with my friends. My goal is to extend the same joy to everyone else attending club activities and events. As your president, I cant wait to make this 2023-2024 year the best one yet!
      ";
  }
}
  
  function person2() {
    document.getElementById('myImage')
      .src = "Mask group (3).png";
    document.getElementById('message')
      .innerHTML = "Anika Bhatt";
  }

  function person3() {
    document.getElementById('myImage')
      .src = "Mask group (4).png";
    document.getElementById('message')
      .innerHTML = "Ann Alex";
  }

  function person4() {
    document.getElementById('myImage')
      .src = "Mask group (5).png";
    document.getElementById('message')
      .innerHTML = "Madelinh Weiner";
  }

  function person5() {
    document.getElementById('myImage')
      .src = "Mask group (6).png";
    document.getElementById('message')
      .innerHTML = "Annika Bhatia";
  }

  function person6() {
    document.getElementById('myImage')
      .src = "Mask group (7).png";
    document.getElementById('message')
      .innerHTML = "Alayna Lee";
  }

  function person7() {
    document.getElementById('myImage')
      .src = "Mask group (8).png";
    document.getElementById('message')
      .innerHTML = "James Wang";
  }

  function person8() {
    document.getElementById('myImage')
      .src = "Mask group (9).png";
    document.getElementById('message')
      .innerHTML = "Niru Gupta";
  }

  function person9() {
    document.getElementById('myImage')
      .src = "Mask group (10).png";
    document.getElementById('message')
      .innerHTML = "Sydney Yuen";
  }