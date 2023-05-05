const searchObjects = (searchString, objects) => {
    return objects.filter((obj) => {
      return (
        obj.name.toLowerCase().includes(searchString.toLowerCase()) ||
        obj.description.toLowerCase().includes(searchString.toLowerCase())
      );
    });
  };
  
  // Example usage
  const objects = [
    { id: 1, name: 'apple', description: 'A juicy fruit' },
    { id: 2, name: 'banana', description: 'A yellow fruit' },
    { id: 3, name: 'carrot', description: 'A crunchy vegetable' },
  ];
  
  const searchResults = searchObjects('veget', objects);
  console.log(searchResults);