module.exports = (sequelize, DataTypes) => {
  
    const users = sequelize.define('user_temp', {
          
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          message : 'email must be unique'
        },
        isLowercase: true,
        validate:{
          notEmpty: {
            message: 'Please enter email id'
          },
          isEmail: {
            message: 'Please provide valid email address'
          }
        }
      }, 
      mobile: {
        type: DataTypes.INTEGER
      },
      username: {
        type: DataTypes.STRING
      }
    },{
      freezeTableName: true,
      timestamps: false,
      createdAt: false,
      updatedAt: false
    });

    return users;
    
    }