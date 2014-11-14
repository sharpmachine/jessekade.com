// Knowledge Chart Data
var knowledgeData=[{value:33,color:"#A1915A",highlight:"#A1915A",label:"Front-End Development"},{value:33,color:"#A27259",highlight:"#A27259",label:"User Experience"},{value:16.5,color:"#A27259",highlight:"#A27259",label:"Brand Strategy"},{value:16.5,color:"#414042",highlight:"#414042",label:"Project Management"}],techicanlData=[{value:43,color:"#A1915A",highlight:"#A1915A",label:"CSS"},{value:43,color:"#A27259",highlight:"#A27259",label:"HTML"},{value:10,color:"#414042",highlight:"#414042",label:"Javascript"},{value:3,color:"#A27259",highlight:"#A27259",label:"Ruby"}],frameworkData=[{value:40,color:"#A1915A",highlight:"#A1915A",label:"Bootstrap"},{value:40,color:"#A27259",highlight:"#A27259",label:"WordPress"},{value:20,color:"#414042",highlight:"#414042",label:"Ruby on Rails"}],doughnutOptions={percentageInnerCutout:75,animateScale:!0},setupKnowledgeCanvas;setupKnowledgeCanvas=function(e){var t,n;e=$(e);n=e.parent().width();e.prop({width:n,height:200});t=e.get(0).getContext("2d");return(new Chart(t)).Doughnut(knowledgeData,doughnutOptions)};(function(e){setupKnowledgeCanvas(e);return $(window).resize(function(){return setupKnowledgeCanvas(e)})})("#knowledgeChart");var setupTechnicalCanvas;setupTechnicalCanvas=function(e){var t,n;e=$(e);n=e.parent().width();e.prop({width:n,height:200});t=e.get(0).getContext("2d");return(new Chart(t)).Doughnut(techicanlData,doughnutOptions)};(function(e){setupTechnicalCanvas(e);return $(window).resize(function(){return setupTechnicalCanvas(e)})})("#cssChart");var setupFrameworkCanvas;setupFrameworkCanvas=function(e){var t,n;e=$(e);n=e.parent().width();e.prop({width:n,height:200});t=e.get(0).getContext("2d");return(new Chart(t)).Doughnut(frameworkData,doughnutOptions)};(function(e){setupFrameworkCanvas(e);return $(window).resize(function(){return setupFrameworkCanvas(e)})})("#htmlChart");