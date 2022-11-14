const ROLE = {
  ADMIN: 'Admin',
  PARTNER: 'Partner',
};

const STATUS = {
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
  PENDING: 'Pending',
};

export const userTableHeader = ['Name', 'Role', 'Phone', 'Status', 'Waterfall']

export const userData = [
  {
    name: 'Jane Doe',
    email: 'janedoe@example.com',
    logoUrl: '',
    role: ROLE.ADMIN,
    phone: 4805550103,
    expireDate: Date(),
    status: STATUS.ACTIVE,
    waterfall: 45,
  },
  {
    name: 'John Doe',
    email: 'johndoe@example.com',
    'logo-url': '',
    role: ROLE.PARTNER,
    phone: 4805589765,
    'expire-date': Date(),
    status: STATUS.PENDING,
    waterfall: 120,
  },
  {
    name: 'Jean Gray',
    email: 'phoenix@example.com',
    'logo-url': '',
    role: ROLE.ADMIN,
    phone: 8372560103,
    'expire-date': Date(),
    status: STATUS.ACTIVE,
    waterfall: 83,
  },
  {
    name: 'Ryan Reynolds',
    email: 'cat_reynolds@example.com',
    'logo-url': '',
    role: ROLE.ADMIN,
    phone: 8978550103,
    'expire-date': Date(),
    status: STATUS.INACTIVE,
    waterfall: 58,
  },
  {
    name: 'Barack Obama',
    email: 'barack123@example.com',
    'logo-url': '',
    role: ROLE.ADMIN,
    phone: 888950103,
    'expire-date': Date(),
    status: STATUS.PENDING,
    waterfall: 83,
  },
];