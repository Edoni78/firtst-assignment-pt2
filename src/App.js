import './App.css';
import Card from './components/Card/Card';
import data from './components/Card/Data'


function App() {

  return (
  <div className='container'>
    <div className='cards'>
      {data.map(item => {
          return(
            <Card key={item.id}
            rate={item.rate}
            image={item.image}
            status={item.status}
            backgroundColor={item.backGroundColor}
            name={item.name}
            text={item.text}
            link={item.link}
            />
          )
        })
      }
    </div>
  </div>
  );
}

export default App;
