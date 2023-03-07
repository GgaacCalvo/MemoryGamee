
import { useEffect, useState } from 'react';
import './App.css';
import Home from './Home';
import logo1 from './assets/glass-heart.png';
import logo2 from './assets/sea-star.png';
import logo3 from './assets/sea-turtle.png';
import logo4 from './assets/seagull.png';
import logo5 from './assets/seahorse.png';
import logo6 from './assets/shambling-mound.png';
import logo7 from './assets/shambling-zombie.png';
import logo8 from './assets/shears.png';
import logo9 from './assets/sheep.png';
import logo10 from './assets/slime.png';
import logo11 from './assets/snail-eyes.png';
import logo12 from './assets/spider-eye.png';
import logo13 from './assets/torch.png';
import logo14 from './assets/tracked-robot.png';
import logo15 from './assets/traffic-lights-green.png';

function App() {
  const [st, setSt] = useState(false);
  let options = [
    { letra: "⌚", id: 1, selected: false, picture: logo1 },
    { letra: "⌚", id: 2, selected: false, picture: logo1  },
    { letra: "📱", id: 3, selected: false, picture: logo2  },
    { letra: "📱", id: 4, selected: false, picture: logo2  },
    { letra: "📀", id: 5, selected: false, picture: logo3  },
    { letra: "📀", id: 6, selected: false, picture: logo3  },
    { letra: "👔", id: 7, selected: false, picture: logo4  },
    { letra: "👔", id: 8, selected: false, picture: logo4  },
    { letra: "🧬", id: 9, selected: false, picture: logo5  },
    { letra: "🧬", id: 10, selected: false, picture: logo5  },
    { letra: "🗿", id: 11, selected: false, picture: logo6  },
    { letra: "🗿", id: 12, selected: false, picture: logo6  },
    { letra: "🎸", id: 13, selected: false, picture: logo7  },
    { letra: "🎸", id: 14, selected: false, picture: logo7  },
    { letra: "🎮", id: 15, selected: false, picture: logo8  },
    { letra: "🎮", id: 16, selected: false, picture: logo8  },
    { letra: "🌈", id: 17, selected: false, picture: logo9  },
    { letra: "🌈", id: 18, selected: false, picture: logo9  },
    { letra: "🍺", id: 19, selected: false, picture: logo10  },
    { letra: "🍺", id: 20, selected: false, picture: logo10  },
    { letra: "🎅", id: 21, selected: false, picture: logo11  },
    { letra: "🎅", id: 22, selected: false, picture: logo11  },
    { letra: "🥑", id: 23, selected: false, picture: logo12  },
    { letra: "🥑", id: 24, selected: false, picture: logo12  },
    { letra: "🌞", id: 25, selected: false, picture: logo13  },
    { letra: "🌞", id: 26, selected: false, picture: logo13  },
    { letra: "👽", id: 27, selected: false, picture: logo14  },
    { letra: "👽", id: 28, selected: false, picture: logo14  },
    { letra: "🤡", id: 29, selected: false, picture: logo15  },
    { letra: "🤡", id: 30, selected: false, picture: logo15  },
  ]

  const sorting = (options) => {
    for (let i = (options.length - 1); i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    
    setSt(true);
  }
  useEffect(() => {
    sorting(options);
    {console.log(options)}
  }, [options])
  if (st) {
    return(
      <div className="App">
        
          <Home options={options} />
      </div>
      
    )
  }
  
}

export default App;
