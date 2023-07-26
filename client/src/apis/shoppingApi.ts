import { useEffect, useState } from 'react';
import axios from 'axios';

const useShoppingCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:3001/api', {
          startDate: '2017-08-01',
          endDate: '2017-09-30',
          timeUnit: 'month',
          category: '50000000',
          keyword: '정장',
          device: '',
          gender: '',
          ages: ['10', '20'],
        });

        setCategories(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { categories, loading };
};

export default useShoppingCategories;
