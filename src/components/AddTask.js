import React , {useState} from 'react'

const AddTask = ({onAdd}) => {
    let [text, setText] = useState('');
    let [reminder, setReminder] = useState(false)
    const onSubmit = (e) =>
    {
      e.preventDefault();
      if (!text) {
        alert("Please add Task");
        return;
      }

      onAdd({ text, reminder });

      setText('');
      setReminder(false);
    }
    return (
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          {/* <label>Task</label> */}
          <input
            type="text"
            placeholder="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="form-control form-control-check">
          {/* <label> Set reminder</label> */}
          <input
            type="checkBox"
            value={reminder}
            checked={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <input
          type="submit"
          value="Add Task"
          className="btn btn-block btn-dark"
        />
      </form>
    );
    
}

export default AddTask
