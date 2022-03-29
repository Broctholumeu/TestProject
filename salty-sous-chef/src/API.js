

const BASE_URL = "http://data.fixer.io/api/latest"

    ?access_key = "ae664278ce69935cc5d30cf63284a78c"
    &base = USD
    &symbols = AUD,USD,GBP,JPY

    useEffect(() => {
        fetch(BASE_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                    'This is an HTTP error: The status is ${response.status}'
                );
            }
            return response.json();
        })
        .then((actualData) => console.log(actualData))
        .catch((err) => {
            console.log(err.message);
        })
      }, [])