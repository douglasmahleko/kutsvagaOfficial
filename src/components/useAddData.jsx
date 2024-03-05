function UseAddData({data}){
    const [data, setData] = useState(null)
	const [sending, setSending] = useState(true)
	const [error, setError] = useState(null)
    
    const sendMessage = async (e) => {
        e.preventDefault();
        try {
          setSending(true);
          await backendActor.addCar(message);
          setSending(true);
          navigate('/showCars');
        } catch (error) {
          setSending(false);
          setError(error)
        }
      };
      sendMessage()
      return { data, sending, error}
}
export default UseAddData