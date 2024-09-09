document.getElementById('generateBtn').addEventListener('click', () => {
    const dataType = document.getElementById('dataType').value;
    let result = '';
  
    switch (dataType) {
      case 'name':
        result = generateRandomName();
        break;
      case 'email':
        result = generateRandomEmail();
        break;
      case 'phone':
        result = generateRandomPhoneNumber();
        break;
      default:
        result = 'Unknown data type';
    }
  
    document.getElementById('result').textContent = result;
  });
  
  function generateRandomName() {
    const firstNames = ['John', 'Jane', 'Alice', 'Robert'];
    const secondNames= ['Doe','Smith','Johnson',"Brown"];
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomSecondName = secondNames[Math.floor(Math.random() * secondNames.length)];
    return `${randomFirstName} ${randomSecondName}`;
    

    

    
  }
  
  function generateRandomEmail() {
    const domains = ['example.com', 'mail.com', 'test.com'];
    const username = Math.random().toString(36).substring(2, 10);
    const domain = domains[Math.floor(Math.random() * domains.length)];
    return `${username}@${domain}`;
  }
  
  function generateRandomPhoneNumber() {
    const phone = Math.floor(100000000 + Math.random() * 900000000);
    return `+1 ${phone}`;
  }
  