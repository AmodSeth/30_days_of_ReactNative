### Day-2 
Props in react Native











### how to use useEffect with a set time out on changing
```
function App(){
  const warn = () => {
    console.warn("fuck off")
  }
  const [name, setname] = useState("Amod seth")

  //using use state to update the useState
  useEffect(() => {
    setTimeout(() => {
      setname("Captain America")
    }, 1000);
  
   
  }, [])
  

  return (
    <View>
      <Text>Press the button</Text>
      <Button title='This is the button'/>
      <Text>{name}</Text>
    </View>
  );
}



export default App;



```