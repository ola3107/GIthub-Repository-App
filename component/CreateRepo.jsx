
const createRepo = () => {
    return (
        <div>
            <h1>Create New Repository</h1>
            <form>
                <label>Repository Name</label>
                <input type='text' placeholder='Enter Repository Name' />
                <label>Repository Description</label>
                <input type='text' placeholder='Enter Repository Description' />
                <label>Public</label>
                <input type='checkbox' />
                <button>Create Repository</button>
            </form>
        </div>
    );
}

export default createRepo;