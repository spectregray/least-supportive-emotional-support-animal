<script>
    let img = "https://i.imgflip.com/80me7d.jpg"
</script>
<div class="message-cont reverse">
    <div class="bubble right">
        <div class="loader"></div>
    </div>
    <div class="user-pfp">
        <img src={img} />
    </div>
</div>
<style>
.message-cont {
    display: flex;
    gap: 25px;
    align-items: flex-start;
    justify-content: flex-end;
}

.message-cont.reverse {
    flex-flow: row-reverse;
}

.message-cont img {
    max-height: 300px;
    border-radius: 5px;
    margin-top: 5px;
}


.bubble {
  position: relative;
  background-color: #fff;
  color: #000;
  box-shadow: 0 -4px #fff, 0 -8px #000, 4px 0 #fff, 4px -4px #000, 8px 0 #000, 0 4px #fff, 0 8px #000, -4px 0 #fff, -4px 4px #000, -8px 0 #000, -4px -4px #000, 4px 4px #000;
  box-sizing: border-box;
  margin: 5px;
  padding: 10px 30px;
  margin-bottom: 25px;
  font-size: 18px;
}
.bubble::after {
  content: "";
  display: block;
  position: absolute;
  box-sizing: border-box;
}

.bubble.right::after {
  height: 4px;
  width: 4px;
  top: 20px;
  right: -8px;
  background: white;
  box-shadow: 4px -4px #fff, 4px 0 #fff, 8px 0 #fff, 0 -8px #fff, 4px 4px #000, 8px 4px #000, 12px 4px #000, 16px 4px #000, 12px 0 #000, 8px -4px #000, 4px -8px #000, 0 -4px #fff;
  transform: scaleY(-1);
}

.reverse .bubble.right::after {
    left: -8px;
    transform: scaleY(-1) scaleX(-1);
}

.user-pfp {
		height: 50px;
		width: 50px;
        min-width: 50px;
		border-radius: 50%;
		overflow: hidden;
		border: 3px solid black;
	}

	.user-pfp img {
		width: 100%;
		height: 100%;
		object-fit: cover;
        margin: 0;
	}

    .loader {
  width: 10px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: l5 1s infinite linear alternate;
}
@keyframes l5 {
    0%  {box-shadow: 20px 0 #000, -20px 0 #0002;background: #000 }
    33% {box-shadow: 20px 0 #000, -20px 0 #0002;background: #0002}
    66% {box-shadow: 20px 0 #0002,-20px 0 #000; background: #0002}
    100%{box-shadow: 20px 0 #0002,-20px 0 #000; background: #000 }
}
</style>