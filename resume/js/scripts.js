

  // Knowledge Chart Data
  var knowledgeData = [
  {
    value: 33,
    color:"#A1915A",
    highlight: "#A1915A",
    label: "Front-End Development"
  },
  {
    value: 33,
    color: "#A27259",
    highlight: "#A27259",
    label: "User Experience"
  },
  {
    value: 16.5,
    color: "#A27259",
    highlight: "#A27259",
    label: "Brand Strategy"
  },
  {
    value: 16.5,
    color: "#414042",
    highlight: "#414042",
    label: "Project Management"
  }
  ];

  // Technical Skills Data

  var techicanlData = [
  {
    value: 43,
    color:"#A1915A",
    highlight: "#A1915A",
    label: "CSS"
  },
  {
    value: 43,
    color: "#A27259",
    highlight: "#A27259",
    label: "HTML"
  },
  {
    value: 10,
    color: "#414042",
    highlight: "#414042",
    label: "Javascript"
  },
  {
    value: 3,
    color: "#A27259",
    highlight: "#A27259",
    label: "Ruby"
  }
  ];

    // Framework Data

    var frameworkData = [
    {
      value: 40,
      color:"#A1915A",
      highlight: "#A1915A",
      label: "Bootstrap"
    },
    {
      value: 40,
      color: "#A27259",
      highlight: "#A27259",
      label: "WordPress"
    },
    {
      value: 20,
      color: "#414042",
      highlight: "#414042",
      label: "Ruby on Rails"
    }
    ];

  // Doughnut Chart Options
  var doughnutOptions = {
    percentageInnerCutout : 75,
    animateScale : true
  }


  var setupKnowledgeCanvas;

  setupKnowledgeCanvas = function(canvas) {
    var ctx, newWidth;
    canvas = $(canvas);
    newWidth = canvas.parent().width();
    canvas.prop({
      width: newWidth,
      height: 200
    });
    ctx = canvas.get(0).getContext("2d");
    return new Chart(ctx).Doughnut(knowledgeData, doughnutOptions);
  };

  (function(canvas) {
    setupKnowledgeCanvas(canvas);
    return $(window).resize(function() {
      return setupKnowledgeCanvas(canvas);
    });
  })("#knowledgeChart");

  var setupTechnicalCanvas;

  setupTechnicalCanvas = function(canvas) {
    var ctx, newWidth;
    canvas = $(canvas);
    newWidth = canvas.parent().width();
    canvas.prop({
      width: newWidth,
      height: 200
    });
    ctx = canvas.get(0).getContext("2d");
    return new Chart(ctx).Doughnut(techicanlData, doughnutOptions);
  };

  (function(canvas) {
    setupTechnicalCanvas(canvas);
    return $(window).resize(function() {
      return setupTechnicalCanvas(canvas);
    });
  })("#cssChart");

  var setupFrameworkCanvas;

  setupFrameworkCanvas = function(canvas) {
    var ctx, newWidth;
    canvas = $(canvas);
    newWidth = canvas.parent().width();
    canvas.prop({
      width: newWidth,
      height: 200
    });
    ctx = canvas.get(0).getContext("2d");
    return new Chart(ctx).Doughnut(frameworkData, doughnutOptions);
  };

  (function(canvas) {
    setupFrameworkCanvas(canvas);
    return $(window).resize(function() {
      return setupFrameworkCanvas(canvas);
    });
  })("#htmlChart");

  // Knowledge Chart
  // var knowledge = document.getElementById("knowledgeChart").getContext("2d");
  // new Chart(knowledge).Doughnut(knowledgeData, doughnutOptions);

  // var css = document.getElementById("cssChart").getContext("2d");
  // new Chart(css).Doughnut(techicanlData, doughnutOptions);

  // var html = document.getElementById("htmlChart").getContext("2d");
  // new Chart(html).Doughnut(frameworkData, doughnutOptions);
  