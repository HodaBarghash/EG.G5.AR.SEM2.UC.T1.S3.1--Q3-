function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5f4bONV8Lay":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwQ51yv9TmW8siIPFk_MY75SzIvQt5ic3XDZ2hL5p0AJs9CITvt5ErNcwv5sp-P4W6Ihg/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

