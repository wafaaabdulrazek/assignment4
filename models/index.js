const User = require('./User');
const Task = require('./Task');

// define relationships
User.hasMany(Task, {
    foreignKey: 'userId',
    as: 'tasks'
});

Task.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});

module.exports = {
    User,
    Task
}; 