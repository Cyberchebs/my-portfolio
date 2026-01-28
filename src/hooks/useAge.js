import { useState, useEffect } from 'react';

function useAge(birthDate) {
  const calculateAge = () => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const [age, setAge] = useState(calculateAge());

  useEffect(() => {
    // Check daily at midnight if age should update
    const checkAge = () => {
      setAge(calculateAge());
    };

    const interval = setInterval(checkAge, 1000 * 60 * 60); // Check every hour
    return () => clearInterval(interval);
  }, [birthDate]);

  return age;
}


export default useAge;