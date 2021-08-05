import React, { useEffect, useState } from 'react';
import { style } from './AdminPageStyle';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [checkedArray, setCheckedArray] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [pages, setPages] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [clickCheck, setClickCheck] = useState(false);
  const limit = 10;
  const menuList = ['PARENT', 'HELP', 'LOG'];

  const onHandleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const checkedKeys = Object.keys(checkedArray);

  const onHandleChckBtn = (page, tindex) => {
    const seletedInfo = checkedKeys.includes(tindex.toString());
    let obj = {};
    let newSelected = [];

    const handleChangeArrayToObj = () => {
      for (const [key, value] of Object.entries(checkedArray)) {
        obj[key] = value;
      }
      obj[tindex] = newSelected;
      console.log(obj);
      setCheckedArray(obj);
    };

    if (seletedInfo === false) {
      newSelected.push(page);
      handleChangeArrayToObj();
    } else {
      const selectedIndex = checkedArray[tindex].indexOf(page);

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(checkedArray[tindex], page);
      } else {
        newSelected = newSelected.push([...checkedArray[tindex]]);
        newSelected.splice(selectedIndex, 1);
      }
      handleChangeArrayToObj();
    }
  };

  const isSelected = (name, indexs) => {
    if (checkedKeys.length > 0 && checkedKeys.includes(indexs.toString())) {
      return checkedArray[indexs].indexOf(name) !== -1;
    }
  };

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
            <Searchbox
              type="text"
              placeholder="Search Name"
              onChange={onHandleSearch}
            />
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
                      let isItemSelected = isSelected(property.value, indexs);

                      return (
                        <div key={index}>
                          <Checkbox
                            type="checkbox"
                            checked={isItemSelected}
                            id={index}
                            onClick={() =>
                              onHandleChckBtn(property.value, indexs)
                            }
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
