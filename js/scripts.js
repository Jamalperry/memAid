$(document).ready(function() {

  $(".clicker").click(function() {
    $(".shown").slideToggle(1000, function() {
      $(".hidden").slideToggle(1000);
    });
  });

  $(".clicker1").click(function() {
    $(".shown1").slideToggle(1000, function() {
      $(".hidden1").slideToggle(1000);
    });
  });

  $(".clicker2").click(function() {
    $(".shown2").slideToggle(1000, function() {
      $(".hidden2").slideToggle(1000);
    });
  });

  $(".clicker3").click(function() {
    $(".shown3").slideToggle(1000, function() {
      $(".hidden3").slideToggle(1000);
    });
  });

  $(".clicker4").click(function() {
    $(".shown4").slideToggle(1000, function() {
      $(".hidden4").slideToggle(1000);
    });
  });

  $(".clicker5").click(function() {
    $(".shown5").slideToggle(1000, function() {
      $(".hidden").slideToggle(1000);
    });
  });

  $(".clicker6").click(function() {
    $(".shown6").slideToggle(1000, function() {
      $(".hidden").slideToggle(1000);
    });
  });

  $(".clicker7").click(function() {
    $(".shown7").slideToggle(1000, function() {
      $(".hidden").slideToggle(1000);
    });
  });

  $(".clicker8").click(function() {
    $(".shown8").slideToggle(1000, function() {
      $(".hidden8").slideToggle(1000);
    });
  });

  $(".clicker9").click(function() {
    $(".shown9").slideToggle(1000, function() {
      $(".hidden9").slideToggle(1000);
    });
  });

  $(".clicker10").click(function() {
    $(".shown10").slideToggle(1000, function() {
      $(".hidden10").slideToggle(1000);
    });
  });

  $(".clicker11").click(function() {
    $(".shown11").slideToggle(1000, function() {
      $(".hidden11").slideToggle(1000);
    });
  });

  $(".clicker12").click(function() {
    $(".shown12").slideToggle(1000, function() {
      $(".hidden12").slideToggle(1000);
    });
  });

  $(".clicker13").click(function() {
    $(".shown13").slideToggle(1000, function() {
      $(".hidden13").slideToggle(1000);
    });
  });

  function one() {
    $(".btn").attr("class", "pulse waves-effect waves-light btn");

    setTimeout(two, 2000);
  }

  function two() {
    $(".btn").attr("class", "waves-effect waves-light btn");

    setTimeout(one, 5000);
  }

  setTimeout(one, 4000);
});