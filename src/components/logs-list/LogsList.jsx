import mc from "./logs-list.module.scss";

const LogsList = ({ logs }) => {
  return (
    <div className={mc.container}>
      <pre>
        <ul>
          {logs.map((log, i) => (
            <li key={i}>
              <span>{log.date}</span>
              <span>{log.name}</span>
            </li>
          ))}
        </ul>
      </pre>
    </div>
  );
};

export default LogsList;
