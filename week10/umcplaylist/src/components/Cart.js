import React,{useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronUp as UpIcon, ChevronDown as DownIcon, CartIcon } from '../constants/icons';
import { increase, decrease, clearCart, calculateTotals,fetchCartItems } from '../redux/cartSlice';

const Cart = () => {
  const { cartItems, amount, total, status, error } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  if (status === 'loading') {
    return <LoadingText>Loading 중</LoadingText>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }


  if (amount < 1) {
    return (
      <CartContainer>
        <Header>
          UMC PlayList <CartIcon quantity={amount} />
        </Header>
        <Title>당신이 선택한 음반</Title>
        <EmptyCart>장바구니가 비었습니다.</EmptyCart>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <Header>
        UMC PlayList <CartIcon quantity={amount} />
      </Header>
      <Title>당신이 선택한 음반</Title>
      {cartItems.map(item => (
        <CartItem key={item.id}>
          <Image src={item.img} alt={item.title} />
          <ItemDetails>
            <TitleText>{item.title} | {item.singer}</TitleText>
            <Price>₩ {item.price}</Price>
            <AmountContainer>
            <Button onClick={() => dispatch(increase(item.id))}>+</Button>
            <Amount>{item.amount}</Amount>
            <Button onClick={() => dispatch(decrease(item.id))}>-</Button>
            </AmountContainer>
          </ItemDetails>
        </CartItem>
      ))}
      <CartFooter>
        <ClearButton onClick={() => dispatch(clearCart())}>장바구니 초기화</ClearButton>
        <TotalContainer>
          <TotalAmount>총 수량: {amount}개</TotalAmount>
          <TotalPrice>총 금액: ₩ {total}</TotalPrice>
        </TotalContainer>
      </CartFooter>
    </CartContainer>
  );
};    
export default Cart;

// 스타일 코드
const CartContainer = styled.div`
  background-color: #f0f4ff;
  min-height: 100vh;
  padding: 20px;
`;

const Header = styled.h1`
  background-color: #3366ff;
  color: white;
  text-align: center;
  padding: 20px;
  margin: 0;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  //align-items: center;
  //padding: 0 20px; // Adds padding for space on the left and right
`;

const Title = styled.h2`
  color: #333;
  text-align: center;
  margin: 20px 0;
  font-size: 20px;
`;

const EmptyCart = styled.p`
  text-align: center;
  font-size: 18px;
  color: #888;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

const ItemDetails = styled.div`
  flex: 1;
  padding-left: 20px;
`;

const TitleText = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

const Price = styled.p`
  font-size: 16px;
  color: #555;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Amount = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const CartFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const ClearButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #ff4c4c;
  }
`;

const TotalContainer = styled.div`
  text-align: right;
`;

const TotalAmount = styled.p`
  font-size: 16px;
`;

const TotalPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const ChevronUp = styled(UpIcon)`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const ChevronDown = styled(DownIcon)`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
const Button = styled.button`
`

const LoadingText = styled.p`
  text-align: center;
  font-size: 18px;
  color: #333;
`;