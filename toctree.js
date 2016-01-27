
      var tree;
      
      function treeInit() {
      tree = new YAHOO.widget.TreeView("treeDiv1");
      var root = tree.getRoot();
    
  var objd4e7 = { label: "Introduction", href:"topics/introduction.html", target:"contentwin" };
    var d4e7 = new YAHOO.widget.TextNode(objd4e7, root, false);
  var objd4e15 = { label: "Care and Preparation", href:"topics/care.html", target:"contentwin" };
    var d4e15 = new YAHOO.widget.TextNode(objd4e15, root, false);var objd4e22 = { label: "Pruning", href:"tasks/pruning.html", target:"contentwin" };
    var d4e22 = new YAHOO.widget.TextNode(objd4e22, d4e15, false);var objd4e29 = { label: "Garden Preparation", href:"tasks/gardenPreparation.html", target:"contentwin" };
    var d4e29 = new YAHOO.widget.TextNode(objd4e29, d4e15, false);
  var objd4e37 = { label: "Flowers by Season", href:"topics/index.html", target:"contentwin" };
    var d4e37 = new YAHOO.widget.TextNode(objd4e37, root, false);var objd4e44 = { label: "Spring Flowers", href:"concepts/springFlowers.html", target:"contentwin" };
    var d4e44 = new YAHOO.widget.TextNode(objd4e44, d4e37, false);var objd4e51 = { label: "Iris", href:"topics/flowers/iris.html", target:"contentwin" };
    var d4e51 = new YAHOO.widget.TextNode(objd4e51, d4e44, false);var objd4e58 = { label: "Snowdrop", href:"topics/flowers/snowdrop.html", target:"contentwin" };
    var d4e58 = new YAHOO.widget.TextNode(objd4e58, d4e44, false);var objd4e65 = { label: "Summer Flowers", href:"concepts/summerFlowers.html", target:"contentwin" };
    var d4e65 = new YAHOO.widget.TextNode(objd4e65, d4e37, false);var objd4e72 = { label: "Gardenia", href:"topics/flowers/gardenia.html", target:"contentwin" };
    var d4e72 = new YAHOO.widget.TextNode(objd4e72, d4e65, false);var objd4e79 = { label: "Lilac", href:"topics/flowers/lilac.html", target:"contentwin" };
    var d4e79 = new YAHOO.widget.TextNode(objd4e79, d4e65, false);var objd4e86 = { label: "Autumn Flowers", href:"concepts/autumnFlowers.html", target:"contentwin" };
    var d4e86 = new YAHOO.widget.TextNode(objd4e86, d4e37, false);var objd4e93 = { label: "Chrysanthemum", href:"topics/flowers/chrysanthemum.html", target:"contentwin" };
    var d4e93 = new YAHOO.widget.TextNode(objd4e93, d4e86, false);var objd4e100 = { label: "Salvia", href:"topics/flowers/salvia.html", target:"contentwin" };
    var d4e100 = new YAHOO.widget.TextNode(objd4e100, d4e86, false);var objd4e107 = { label: "Winter Flowers", href:"concepts/winterFlowers.html", target:"contentwin" };
    var d4e107 = new YAHOO.widget.TextNode(objd4e107, d4e37, false);var objd4e114 = { label: "Gerbera", href:"topics/flowers/gerbera.html", target:"contentwin" };
    var d4e114 = new YAHOO.widget.TextNode(objd4e114, d4e107, false);
  
  var d4e124 = new YAHOO.widget.TextNode("Glossary", root, false);var objd4e126 = { label: "Genus", href:"concepts/glossaryGenus.html", target:"contentwin" };
    var d4e126 = new YAHOO.widget.TextNode(objd4e126, d4e124, false);var objd4e133 = { label: "Pollination", href:"concepts/glossaryPollination.html", target:"contentwin" };
    var d4e133 = new YAHOO.widget.TextNode(objd4e133, d4e124, false);var objd4e140 = { label: "Sepal", href:"concepts/glossarySepal.html", target:"contentwin" };
    var d4e140 = new YAHOO.widget.TextNode(objd4e140, d4e124, false);var objd4e147 = { label: "Rhizome", href:"concepts/glossaryRhizome.html", target:"contentwin" };
    var d4e147 = new YAHOO.widget.TextNode(objd4e147, d4e124, false);var objd4e154 = { label: "Bulb", href:"concepts/glossaryBulb.html", target:"contentwin" };
    var d4e154 = new YAHOO.widget.TextNode(objd4e154, d4e124, false);var objd4e161 = { label: "Cultivar", href:"concepts/glossaryCultivar.html", target:"contentwin" };
    var d4e161 = new YAHOO.widget.TextNode(objd4e161, d4e124, false);var objd4e168 = { label: "Perennial", href:"concepts/glossaryPerennial.html", target:"contentwin" };
    var d4e168 = new YAHOO.widget.TextNode(objd4e168, d4e124, false);var objd4e175 = { label: "Panicle", href:"concepts/glossaryPanicle.html", target:"contentwin" };
    var d4e175 = new YAHOO.widget.TextNode(objd4e175, d4e124, false);
  var objd4e184 = { label: "Copyright", href:"topics/copyright.html", target:"contentwin" };
    var d4e184 = new YAHOO.widget.TextNode(objd4e184, root, false);

      tree.draw(); 
      } 
      
      YAHOO.util.Event.addListener(window, "load", treeInit); 
    