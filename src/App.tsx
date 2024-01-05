import { Input } from './components/Input';

function App() {
  return (
    <main className="main">
      <div className="calculator">
        <form className="form">
          <Input
            type="text"
            name="day"
            label="day"
          />
          <Input
            type="text"
            name="month"
            label="month"
          />
          <Input
            type="text"
            name="year"
            label="year"
          />
        </form>
      </div>
    </main>
  );
}

export default App;
