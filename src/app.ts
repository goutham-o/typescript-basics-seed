const coupon: string = 'pizza23';

const normalizeCoupon = (code: string): string => {
  return code.toUpperCase();
};

const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;

console.log(couponMessage)