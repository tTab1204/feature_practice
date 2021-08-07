import React, { useEffect, useState } from 'react';
import { style } from './AdminPageStyle';
import Checkbox from '../../components/Checkbox/Checkbox';
import testData from '../../utils/testData.json';
const properties = [
  { label: 'menu1', value: 'menu1' },
  { label: 'menu2', value: 'menu2' },
  { label: 'menu3', value: 'menu3' },
  { label: 'menu4', value: 'menu4' },
  { label: 'menu5', value: 'menu5' },
];

function AdminPage() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    setData(testData);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            <GoRolePageButton>권한 별 사용자 목록 보기</GoRolePageButton>
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
                      return (
                        <div key={index}>
                          <Checkbox />
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
