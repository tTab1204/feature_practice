import React, { useEffect, useState } from 'react';
import { style } from './AdminPageStyle';
import Checkbox from '../../components/Checkbox/Checkbox';
import testData from '../../utils/testData.json';
import userDataForm from '../../utils/userDataForm';
const properties = [
  { label: 'main', value: 'main', path: '/main' },
  { label: 'admin', value: 'admin', path: '/admin' },
  { label: 'teacher', value: 'teacher', path: '/teacher' },
  { label: 'student', value: 'student', path: '/student' },
  { label: 'school', value: 'school', path: '/school' },
];

function AdminPage() {
  const userData = JSON.parse(localStorage.getItem('userData'));

  const [data, setData] = useState([]);
  const [checkedObject, setCheckedObject] = useState({});

  useEffect(() => {
    initSelected(JSON.parse(localStorage.getItem('userData')));
  }, []);

  const onHandleSubmitPageAuth = () => {
    let userArray = [];
    let obj = { ...checkedObject };
    let keys = Object.keys(obj);
    let menubar;

    for (let i = 0; i < keys.length; i++) {
      menubar = obj[keys[i]];
      userArray.push(
        userDataForm(
          userData[i].userId,
          userData[i].password,
          userData[i].name,
          userData[i].age,
          userData[i].creditCard.cardNumber,
          userData[i].creditCard.holderName,
          userData[i].creditCard.expired,
          userData[i].creditCard.CVC,
          userData[i].role,
          userData[i].address,
          menubar,
        ),
      );
    }
    localStorage.setItem('userData', JSON.stringify(userArray));
  };

  // 초기 데이터 저장을 위한 함수
  const onHandleSubmitData = () => {
    localStorage.setItem('userData', JSON.stringify(testData));
  };

  const onChangeCheckbox = (path, userId) => {
    let obj = { ...checkedObject };
    let menuArray = obj[userId];

    const selectedIndex = menuArray.indexOf(path);
    selectedIndex === -1 ? menuArray.push(path) : menuArray.splice(selectedIndex, 1);

    setCheckedObject(obj);
  };

  const initSelected = (userData) => {
    setData(userData);
    let userMenu = userData.reduce((acc, cur) => ({ ...acc, [cur.userId]: cur.menubar }), {});

    setCheckedObject(userMenu);
  };

  const isChecked = (path, menubar) => {
    return menubar.indexOf(path) !== -1;
  };

  return (
    <div>
      <TableContainer>
        <TableTitleContainer>
          <TableTitleBox>
            <TableTitle>사용자 목록</TableTitle>
            <AccountAddButton>계정 추가</AccountAddButton>
          </TableTitleBox>
          <SearchContainer>
            <Searchbox type="text" placeholder="Search Name" />
            <GoRolePageButton onClick={onHandleSubmitPageAuth}>페이지 이용 권한 저장</GoRolePageButton>
            <GoRolePageButton onClick={onHandleSubmitData}>초기 데이터 localStorage 저장</GoRolePageButton>
          </SearchContainer>
        </TableTitleContainer>

        <table>
          <thead>
            <tr>
              <Cell>ID</Cell>
              <Cell>Name</Cell>
              <Cell>Age</Cell>
              <Cell>Role</Cell>
              <Cell>Address</Cell>
              <Cell>Menu</Cell>
            </tr>
          </thead>
          {data &&
            data.map((data, indexs) => (
              <tbody key={indexs}>
                <tr key={indexs}>
                  <Cell>{data.userId}</Cell>
                  <Cell>{data.name}</Cell>
                  <Cell>{data.age}</Cell>
                  <Cell>{data.role}</Cell>
                  <Cell>{data.address}</Cell>
                  <Cell>
                    {properties.map((property, index) => {
                      let isItemChecked = isChecked(property.path, data.menubar);
                      return (
                        <div key={index}>
                          <Checkbox
                            isItemChecked={isItemChecked}
                            onChangeCheckbox={() => onChangeCheckbox(property.path, data.userId)}
                          />
                          <label>{property.label}</label>
                        </div>
                      );
                    })}
                  </Cell>
                </tr>
              </tbody>
            ))}
        </table>
        <TableFooter></TableFooter>
      </TableContainer>
    </div>
  );
}

export default AdminPage;

const {
  Cell,
  AccountAddButton,
  Searchbox,
  SearchContainer,
  TableContainer,
  TableTitleBox,
  TableFooter,
  TableTitle,
  TableTitleContainer,
  GoRolePageButton,
} = style;
