
<p id="id1"> Hello world</p>
<p id="id2"> My P ID2 </p>
<p id="id3"> My P ID3 </p>
<button onclick="alert('Hello');"> Alert </button>
<button onclick="changeP();" > Change P </button>
<script>
 var p1 = document.getElementById("id1");
 p1.onclick = function () {
 p1.innerHTML = "Foo bar";
 };
 function changeP() {
 p1.innerHTML = "Change p1";
 };
 window.onload = function start() {
 setTimeout( function (){
 p1.innerHTML = "Start";
 }, 2000);
 };
 document.getElementById("id3").style.borderStyle = "dashed";
