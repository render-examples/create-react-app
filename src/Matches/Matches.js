import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, Card, Spin, Button } from 'antd';
import { getApiUrl } from "../api/common";


const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '10px',
};

const listStyle = {
  width: '80%',
  margin: '20px 0',
};

const Matches = ({negibourhoodName, user_id, negibourhoodName_id}) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterApplied, setFilterApplied] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response;
      if (filterApplied) {
        // Fetch data with user_id if filter has been applied
        const formData = new FormData();
        formData.append('location', 12);    //neighbourhood_id
        formData.append('user_id', 4);    //user_id

        response = await fetch(`${getApiUrl()}/get_matches`, {
            method: "POST",
            body: formData
        });
      } else {
        // Initial fetch without user_id
        const formData = new FormData();
        formData.append('location', 12);    //neighbourhood_id
        response = await fetch(`${getApiUrl()}/get_matches`, {
            method: "POST",
            body: formData
        });

      }
      const respJson = await response.json();
      console.log(respJson);

      setTasks(respJson);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setLoading(false);
    }
  };

  const handleFilterForMe = () => {
    setLoading(true);
    setFilterApplied(true); // Set filter applied flag
    fetchData();
  };

  return (
    <div style={containerStyle}>
        <h2> שכונת זיו{ negibourhoodName } </h2>;    // neighbourhood_name
      <Button type="primary" onClick={handleFilterForMe} style={{ marginBottom: '20px' }}>
        Filter For Me
      </Button>
      {loading ? (
        <Spin size="large" />
      ) : (
        <List
          grid={{ gutter: 16, column: 1 }}
          style={listStyle}
          dataSource={tasks}
          renderItem={item => (
            <List.Item>
              <Card title={`${item.executing_helper_username} needs Some help - status: ${item.status}`}> 
                <p><strong>Details:</strong> {item.task_details}</p>
                <p><strong>Category:</strong> {item.category}</p>
                <p> time to complete the task -  {item.task_time}</p>
              </Card>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default Matches;
