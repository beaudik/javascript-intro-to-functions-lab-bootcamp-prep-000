function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGranma(sing){
  if (sing.toLowerCase()===sing){
    console.log("i can't hear you")
  }

}
sayHiToGrandma("Granma")
