export const code = {
  test: {
    html: "<template>\n" +
    "  <div id=\"app\">\n" +
    "    <router-view></router-view>\n" +
    "  </div>\n" +
    "</template>\n" +
    "\n" +
    "<script>\n" +
    "  export default {\n" +
    "    name: 'app',\n" +
    "    created(){\n" +
    "\n" +
    "    },\n" +
    "    methods: {\n" +
    "      //编码\n" +
    "      html_encode(str) {\n" +
    "        var s = \"\";\n" +
    "        if (str.length == 0) return \"\";\n" +
    "        s = str.replace(/&/g, \">\");\n" +
    "        s = s.replace(/</g, \"<\");\n" +
    "        s = s.replace(/>/g, \">\");\n" +
    "        s = s.replace(/ /g, \" \");\n" +
    "        s = s.replace(/\\'/g, \"'\");\n" +
    "        s = s.replace(/\\\"/g, '\"');\n" +
    "        s = s.replace(/\\n/g, \"<br>\");\n" +
    "        return s;\n" +
    "      },\n" +
    "    }\n" +
    "  }\n" +
    "</script>\n" +
    "\n" +
    "<style>\n" +
    "  #app {\n" +
    "    font-family: 'Avenir', Helvetica, Arial, sans-serif;\n" +
    "    -webkit-font-smoothing: antialiased;\n" +
    "    -moz-osx-font-smoothing: grayscale;\n" +
    "  }\n" +
    "</style>\n"
  }
}

