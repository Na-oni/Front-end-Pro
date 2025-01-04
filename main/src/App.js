import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout, Menu, Typography, List, Input, Button } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;

const App = () => {
    return (
        <Router>
            <Layout>
                <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        items={[
                            { key: '1', label: <Link to="/">Home</Link> },
                            { key: '2', label: <Link to="/todo">TODO</Link> },
                            { key: '3', label: <Link to="/swapi">SWAPI</Link> },
                        ]}
                    />
                </Header>

                <Content style={{ padding: '20px' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/todo" element={<Todo />} />
                        <Route path="/swapi" element={<Swapi />} />
                    </Routes>
                </Content>

                <Footer style={{ textAlign: 'center' }}>
                    <Text>Email: miahoriacheva@gmail.com | Phone: +380 96 544 44 34
                    </Text>
                    <br/>
                    <Text>LinkedIn: https://www.linkedin.com/in/miahoriacheva-69100a330/</Text>
                </Footer>
            </Layout>
        </Router>
    );
};

const Home = () => (
    <div>
        <Title level={2}>SUMMARY</Title>
        <Text>
            I am an aspiring Front-end developer with a master’s degree,
            currently enhancing my skills through courses at Hillel IT School. I
            have experience working with HTML, CSS, JavaScript, and modern
            libraries and frameworks. I am eager to apply my knowledge in a
            professional environment. I am looking for a team with a friendly
            atmosphere where I can contribute to exciting projects, grow, and
            develop as a professional. I am ready for new challenges and open
            to collaboration
        </Text>

        <Title level={3}>SKILLS:</Title>
        <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>DOM</li>
            <li>OOP</li>
            <li>ES6</li>
            <li>GIT</li>
            <li>REST API</li>
            <li>MVC</li>
            <li>MVP</li>
            <li>MVVM</li>
            <li>React-router</li>
            <li>Redux</li>
        </ul>

        <Title level={3}>EDUCATION:</Title>
        <ul>
            <li>Computer Sciences at Dnipro University of Technology 2022-2024</li>
            <li>Computer Sciences at Alfred Nobel University 2018-2022</li>
        </ul>

        <Title level={3}>ADDITIONAL COURSES AND TRAININGS:</Title>
        <ul>
            <li>Front-end Pro at Hillel IT School 2024</li>
            <li>English Elementary at Hillel IT School 2024</li>
            <li>Software development at STEP Computer Academy 2016-2019</li>
        </ul>

        <Title level={3}>HOBBY:</Title>
        <Text>
            I love traveling, spending time with friends, computer games, but
            most of all I love spending time with my chinchilla
        </Text>
    </div>
);

const Todo = () => {
    const [tasks, setTasks] = React.useState([]);
    const [task, setTask] = React.useState('');

    const addTask = () => {
        if (task) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    return (
        <div>
            <Title level={2}>TODO List</Title>
            <Input
                placeholder="Enter a task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                style={{ marginBottom: '10px', width: '300px' }}
            />
            <Button type="primary" onClick={addTask} style={{ marginLeft: '10px' }}>
                Add Task
            </Button>
            <List
                style={{ marginTop: '20px', width: '300px' }}
                bordered
                dataSource={tasks}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />
        </div>
    );
};

const Swapi = () => {
    const [data, setData] = React.useState([]);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const SWAPI_URL = "https://www.swapi.tech/api/people/";

        axios
            .get(SWAPI_URL)
            .then((response) => {
                setData(response.data.results);
                setError(null);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError(error.message || 'An unknown error occurred');
            });
    }, []);

    return (
        <div>
            <Title level={2}>Star Wars Characters</Title>
            {error ? (
                <Text type="danger">Error: {error}</Text>
            ) : (
                <List
                    style={{ width: '300px' }}
                    bordered
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            {item.name} - {item.gender}
                        </List.Item>
                    )}
                />
            )}
        </div>
    );
};



export default App;