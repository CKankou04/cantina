const fetchData = async () => {
    const data = await fetch(`http://localhost:9000/api/recipes`);
    const result = await data.json();
    setRecipeList(result);

  };

  export default Api;