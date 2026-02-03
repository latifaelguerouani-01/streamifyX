const allStar = document.querySelectorAll('.rating .star')const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

allStar.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0
		ratingValue.value = idx + 1

		allStar.forEach(i=> {
			i.classList.replace('bxs-star', 'bx-star')
			i.classList.remove('active')
		})
		for(let i=0; i<allStar.length; i++) {
			if(i <= idx) {
				allStar[i].classList.replace('bx-star', 'bxs-star')
				allStar[i].classList.add('active')
			} else {
				allStar[i].style.setProperty('--i', click)
				click++
			}
		}
	})
})
const movies={
	oppenheimer:{
        name:"Oppenheimer",
		video:"img/Oppenheimer1.jpg",
		source:"img/oppenhiemer.mp4",
		date:"Oppenheimer (2023) USA",
		title:"Oppenheimer",
		type:"2023 film 180 min",
		studio:"8,2/10 989k",
		Android:"",
		IOS:"",
		Windows:""
	},
	DEATH_NOTE:{
		name:"Death Note",
		video:"img/kbira3.jpg",
		source:"img/death.mp4",
		date:"Octobre 2006(Japan)",
		title:"Death Note: Desu nôto",
		type:"2006–2007 12 24min",
		studio:"8.9/10 373k",
		Android:"",
		IOS:"",
		Windows:""
	},
	Interstellar:{
		name:"Interstellar",
		video:"img/Interstellar2.jpg",
		source:"img/Inst.mp4",
		date:"Interstellar 2014",
		title:"Interstellar",
		type:"Film 2h 49min",
		studio:"8,7/10 2,5M",
		Android:"",
		IOS:"",
		Windows:""
	},
	Naruto:{
		name:"Naruto",
		video:"img/Naruto.jpg",
		source:"img/Naruto.mp4",
		date:" February 15, 2007 (Japan)",
		title:"Naruto",
		type:"TV Series 24min",
		studio:"8,7/10 215k",
		Android:"",
		IOS:"",
		Windows:""
	},
	One_Punch_Man:{
		name:"One-Punch Man",
		video:"img/One-Punch Man.jpg",
		source:"img/One-Punch Man.mp4",
		date:"October 5, 2015 (Japan)",
		title:"One-Punch Man",
		type:"TV Series 2015–24min",
		studio:"8,6/10 220k",
		Android:"",
		IOS:"",
		Windows:""
	},
	Black_Clover:{
		name:"Black Clover",
		video:"img/Black_Clover.jpg",
		source:"img/Black_Clover.mp4",
		date:"February 2015 (Japan)",
		title:"Black Clover",
		type:"TV Series 2017–2021 24min",
		studio:"8,2/10 47k",
		Android:"",
		IOS:"",
		Windows:""
	},
	Jujutsu_Kaisen:{
		name:"Jujutsu Kaisen",
		video:"img/Jujutsu_Kaisen.jpg",
		source:"img/Jujutsu_Kaisen.mp4",
		date:"October 3, 2020 Japan",
		title:"Jujutsu Kaisen",
		type:"TV Series 2020 24min",
		studio:"8,5/10 179k",
		Android:"",
		IOS:"",
		Windows:""
	},
	Haikyu:{
        name:"Haikyu",
		video:"img/Haikyu.jpg",
		source:"img/Haikyu.mp4",
		date:"april 6,2014 Japan",
		title:"Haikyu",
		type:"TV Series 2014–2020 24min",
		studio:"8,7/10 51k",
		Android:"",
		IOS:"",
		Windows:""
	},
	Kuroko:{
        name:"Kuroko",
		video:"img/Kuroko.jpg",
		source:"img/Kuroko.mp4",
		date:"April 7, 2012 Japan",
		title:"Kuroko no basuke",
		type:"TV Series 2012–2015 24min",
		studio:"8,2/10 15 k",
		Android:"",
		IOS:"",
		Windows:""
	},
	DIE_HARD:{
        name:"Die Hard",
		video:"img/DIE_HARD.jpg",
		source:"img/DieHard.mp4",
		date:"July 22, 1988 (USA)",
		title:"Die Hard",
		type:"1988 ‧ Action/Thriller ‧ 2h 12m",
		studio:"8,2/10 1 M",
		Android:"",
		IOS:"",
		Windows:""
	},
	FURY_ROAD:{
        name:"Fury Road",
		video:"img/Fury_Road.jpg",
		source:"img/Fury_Road.mp4",
		date:"May 7, 2015 (Hollywood)",
		title:"Mad Max: Fury Road",
		type:"2015 ‧ Action/Sci-fi ‧ 2 hours",
		studio:"8,1/10 1,2 M",
		Android:"",
		IOS:"",
		Windows:""
	},
	JOHN_WICK:{
        name:"John Wick",
		video:"img/JOHN_WICK.jpg",
		source:"img/JOHN_WICK.mp4",
		date:"October 24, 2014 USA",
		title:"John Wick ",
		type:"action thriller film",
		studio:"8,1/10 1,2 M",
		Android:"",
		IOS:"",
		Windows:""
	},
	THE_DARK_KNIGHT:{
        name:"The Dark Knight",
		video:"img/The Dark Knight.jpg",
		source:"img/The Dark Knight.mp4",
		date:"July 18, 2008 USA",
		title:"The Dark Knight",
		type:"2008 ‧ Action/Crime ‧ 2h 32m",
		studio:"9,1/10 3,1 M",
		Android:"",
		IOS:"",
		Windows:""
	},
	THE_RAID:{
        name:"The Raid",
		video:"img/The Raid.jpg",
		source:"img/The Raid.mp4",
		date:"March 23, 2012 (Indonesia)",
		title:"The Raid",
		type:"2011 ‧ Action/Thriller ‧ 1h 41m",
		studio:"7,6/10 228 k",
		Android:"",
		IOS:"",
		Windows:""	
	},
	THE_TERMINATOR:{
        name:"The Terminator",
		video:"img/The Terminator.jpg",
		source:"img/The Terminator.mp4",
		date:"October 26, 1984 (United States)",
		title:"The Terminator (1984)",
		type:"science fiction action film",
		studio:"8,1/10 993 k",
		Android:"",
		IOS:"",
		Windows:""	
	},
    THE_MISSION:{
        name:"The Mission",
		video:"img/THE_MISSION.jpg",
		source:"img/the mission.mp4",
		date:"October 1, 1986 (France)",
		title:"The Mission",
		type:"1986 ‧ Adventure/Action ‧ 2h 5m",
		studio:"7,4/10 70 k",
		Android:"",
		IOS:"",
		Windows:""
	},
	CRUELLA:{
        name:"Cruella",
		video:"img/CRUELLA.jpg",
		source:"img/cruella.mp4",
		date:"May 28, 2021 (USA)",
		title:"Cruella",
		type:"2021  Comedy/Crime ‧ 2h 14m",
		studio:"7,3/10 292 k",
		Android:"",
		IOS:"",
		Windows:""
	},
	DontlookUP:{
        name:"Don't Look Up",
		video:"img/DontlookUP.jpg",
		source:"img/DontlookUP.mp4",
		date:"December 10, 2021 (USA)",
		title:"Don't Look Up",
		type:"2021 ‧ Comedy/Sci-fi ‧ 2h 25m",
		studio:"7,1/10 662 k",
		Android:"",
		IOS:"",
		Windows:""
	},
	Demolition:{
        name:"Demolition",
		video:"img/Demolition.jpg",
		source:"img/Demolition.mp4",
		date:"April 8, 2016 (USA)",
		title:"Demolition",
		type:"2015 ‧ Comedy/Drama ‧ 1h 40m",
		studio:"7,0/10 131 k",
		Android:"",
		IOS:"",
		Windows:""	
	},
	Stepbrothers:{
        name:"Step Brothers",
		video:"img/Stepbrothers.jpg",
		source:"img/Stepbrothers.mp4",
		date:"July 25, 2008 (USA)",
		title:"Step Brothers",
		type:"2008 ‧ Comedy ‧ 1h 38m",
		studio:"6,9/10 338 k",
		Android:"",
		IOS:"",
		Windows:""	
	},
	Backtoschool:{
        name:"Night School",
		video:"img/NightSchool.jpg",
		source:"img/NightSchool.mp4",
		date:"September 28, 2018 (USA)",
		title:"Night School",
		type:"2018 ‧ Comedy/Drama ‧ 1h 52m",
		studio:"5,6/10 49 k",
		Android:"",
		IOS:"",
		Windows:""	
	},
	FreeGuy:{
        name:"Free Guy",
		video:"img/Free Guy.jpg",
		source:"img/Free Guy.mp4",
		date:"August 13, 2021 (USA)",
		title:"Free Guy",
		type:"2021 ‧ Comedy/Action ‧ 1h 55m",
		studio:"7,1/10 481 k",
		Android:"",
		IOS:"",
		Windows:""		
	},
	JohnnyEnglish:{
        name:"Johnny English",
		video:"img/JohnnyEnglish.jpg",
		source:"img/JohnnyEnglish.mp4",
		date:"April 6, 2003 (UK)",
		title:"Johnny English",
		type:"2003 ‧ Comedy/Action ‧ 1h 30m",
		studio:"6,3/10 184 k",
		Android:"",
		IOS:"",
		Windows:""	
	},
	TheConjuring:{
        name:"The Conjuring",
		video:"img/The Conjuring.jpg",
		source:"img/The Conjuring.mp4",
		date:"July 19, 2013 (USA)",
		title:"The Conjuring",
		type:"2013 ‧ Horror/Mystery ‧ 1h 52m",
		studio:"7,5/10 615 k",
		Android:"",
		IOS:"",
		Windows:""
	},
	ItFollows:{
        name:"It Follows",
		video:"img/ItFollows.jpg",
		source:"img/ItFollows.mp4",
		date:"March 27, 2015 (USA)",
		title:"It Follows",
		type:"2014 ‧ Horror/Mystery ‧ 1h 40m",
		studio:"6,8/10 296 k",
		Android:"",
		IOS:"",
		Windows:""
	},
	LaMomie:{
        name:"La Momie",
		video:"img/LaMomie.jpg",
		source:"img/LaMomie.mp4",
		date:"May 4, 1999 (USA)",
		title:"The Mummy (La Momie)",
		type:"1999 ‧ Adventure/Action ‧ 2h 5m",
		studio:"7,1/10 496 k",
		Android:"",
		IOS:"",
		Windows:""
	},
	TheWitch:{
        name:"The Witch",
		video:"img/TheWitch.jpg",
		source:"img/TheWitch.mp4",
		date:"February 19, 2016 (USA)",
		title:"The Witch",
		type:"2015 ‧ Horror/Mystery ‧ 1h 32m",
		studio:"7,0/10 347 k",
		Android:"",
		IOS:"",
		Windows:""
	},
	TheSilence:{
        name:"The Silence",
		video:"img/TheSilence.jpg",
		source:"img/TheSilence.mp4",
		date:"May 16, 2019 (Germany)",
		title:"The Silence",
		type:"2019 ‧ Horror/Sci-fi ‧ 1h 30m",
		studio:"5,4/10 55 k",
		Android:"",
		IOS:"",
		Windows:""
	},
	Sinister:{
        name:"Sinister",
		video:"img/Sinister.jpg",
		source:"img/Sinister.mp4",
		date:"October 5, 2012 Uk",
		title:"Sinister",
		type:"2012 ‧ Horror/Mystery ‧ 1h 50m",
		studio:"6,8/10 312 k",
		Android:"",
		IOS:"",
		Windows:""
	}
};
const params = new URLSearchParams(window.location.search);
const movieName = params.get("movie");

console.log("URL movie =", movieName);

const movie = movies[movieName];


const errorBox = document.getElementById("error-message");

if (!movie) {
  if (errorBox) {
    errorBox.style.display = "block";
    errorBox.innerText = "Movie not found 😕";
  }
} else {

  
  const nameEl = document.getElementById("name");
  if (nameEl) nameEl.innerText = movie.name;

  
  const videoEl = document.getElementById("video");
  const sourceEl = document.getElementById("source");
  if (videoEl && sourceEl) {
    videoEl.poster = movie.video;
    sourceEl.src = movie.source;
    videoEl.load();
  }

  
  const dateEl = document.getElementById("date");
  if (dateEl) {
    dateEl.innerHTML = "<h3>First episode date:</h3> " + movie.date ;
  }

  const titleEl = document.getElementById("title");
  if (titleEl) {
    titleEl.innerHTML = "<h3>Titre original :</h3> " + movie.title;
  }

  const typeEl = document.getElementById("type");
  if (typeEl) {
    typeEl.innerHTML = "<h3>Type :</h3> " + movie.type;
  }

  const studioEl = document.getElementById("studio");
  if (studioEl) {
    studioEl.innerHTML =
      "<h3>NOTE IMDb</h3> <i class='bi bi-star-fill'></i> " + movie.studio;
  }

 
  const androidEl = document.getElementById("Android");
  if (androidEl) androidEl.href = movie.Android;

  const iosEl = document.getElementById("IOS");
  if (iosEl) iosEl.href = movie.IOS;

  const windowsEl = document.getElementById("Windows");
  if (windowsEl) windowsEl.href = movie.Windows;
}
if (dateEl) dateEl.innerText = movie.date;
if (titleEl) titleEl.innerText = movie.title;
if (typeEl) typeEl.innerText = movie.type;
if (studioEl) studioEl.innerText = movie.studio;

const ratingValue = document.querySelector('.rating input')

allStar.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0
		ratingValue.value = idx + 1

		allStar.forEach(i=> {
			i.classList.replace('bxs-star', 'bx-star')
			i.classList.remove('active')
		})
		for(let i=0; i<allStar.length; i++) {
			if(i <= idx) {
				allStar[i].classList.replace('bx-star', 'bxs-star')
				allStar[i].classList.add('active')
			} else {
				allStar[i].style.setProperty('--i', click)
				click++
			}
		}
	})

})
