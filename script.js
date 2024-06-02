Shery.mouseFollower({
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
    debug: true,
  }); 
  Shery.makeMagnet(".fas" , {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });


  document.getElementById('see-more').addEventListener('click', function(event) {
    event.preventDefault();

    const moreWorks = [
      {
        imgSrc: './images/weather_img.jpg',
        title: 'Weather App',
        description: 'It is built in React.js. It enables users to search for weather conditions worldwide and delivers current weather information. The app retrieves weather data using the Weather API.',
        link: 'https://github.com/Jahanzaib-1602/Weather_App_1'
      },
      {
        imgSrc: './images/background.jpg',
        title: 'Project Title 5',
        description: 'Description for project 5.',
        link: 'https://github.com/Jahanzaib-1602/Invoice_Generator'
      },
      {
        imgSrc: './images/background.jpg',
        title: 'Project Title 6',
        description: 'Description for project 6.',
        link: 'https://github.com/Jahanzaib-1602/Invoice_Generator'
      }
    ];

    const workList = document.getElementById('work-list');

    moreWorks.forEach(work => {
      const workDiv = document.createElement('div');
      workDiv.classList.add('work');
      
      const img = document.createElement('img');
      img.src = work.imgSrc;
      workDiv.appendChild(img);
      
      const layer = document.createElement('div');
      layer.classList.add('layer');
      
      const title = document.createElement('h3');
      title.textContent = work.title;
      layer.appendChild(title);
      
      const description = document.createElement('p');
      description.textContent = work.description;
      layer.appendChild(description);
      
      if (work.link) {
        const link = document.createElement('a');
        link.href = work.link;
        link.target = '_blank';
        const icon = document.createElement('i');
        icon.classList.add('fas', 'fa-external-link-alt');
        link.appendChild(icon);
        layer.appendChild(link);
      }
      
      workDiv.appendChild(layer);
      workList.appendChild(workDiv);
    });

    this.style.display = 'none'; 
  });

//loader
var loader = document.getElementById('preloader');
window.addEventListener('load', function() {
  setTimeout(function() {
    loader.style.display = 'none';
  }, 5000); // 5000 milliseconds = 5 seconds
});



