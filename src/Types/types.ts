export interface SelectedItemListProps {
  items: MenuItem[];
  setItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}

export interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  uniqueId: string;
}
export interface Discounts {
  id: number;
  name: string;
  amount: number;
}

export interface MenuListProps {
  selectedDiscounts: Discounts[];
  data: any;
}

export interface DiscountModalProps {
  isVisible: boolean;
  toggleModal: () => void;
  onDiscountsSelected: (selectedDiscounts: Discounts[]) => void;
}

export interface BillProps {
  selectedItems: MenuItem[];
  taxes: Taxes[];
  selectedDiscounts: Discounts[];
}

export interface Taxes {
  id: number;
  name: string;
  amount: number;
  appliesToCategory?: string;
}
