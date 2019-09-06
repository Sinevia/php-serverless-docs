var Header = {
    $type:"div",
    style:'background:aliceblue;padding:20px;',
    $components:[
        {
            $type:"span",
            $text:"PHP Serverless",
        },
        {
            $type:"button",
            style:"float:right",
            $text:"Menu",
            onclick:function(){
                var html = "";
                html += '<ul>';
                html += '  <li>';
                html += '    <a href="#home" onclick="page(\'home\')">Home</a>',
                html += '  </li>';
                html += '  <li>';
                html += '    <a href="#home" onclick="page(\'about\')">About</a>',
                html += '  </li>';
                html += '</ul>';
                Swal.fire({
                    "title":"Menu",
                    "html":html
                });
            }
        }
    ]
};