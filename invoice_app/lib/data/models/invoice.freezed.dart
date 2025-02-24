// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'invoice.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#adding-getters-and-methods-to-our-models');

Invoice _$InvoiceFromJson(Map<String, dynamic> json) {
  return _Invoice.fromJson(json);
}

/// @nodoc
mixin _$Invoice {
  @JsonKey(name: "id")
  String get id => throw _privateConstructorUsedError;
  @JsonKey(name: "createdAt")
  String get createdAt => throw _privateConstructorUsedError;
  @JsonKey(name: "paymentDue")
  DateTime get paymentDue => throw _privateConstructorUsedError;
  @JsonKey(name: "description")
  String get description => throw _privateConstructorUsedError;
  @JsonKey(name: "paymentTerms")
  int get paymentTerms => throw _privateConstructorUsedError;
  @JsonKey(name: "clientName")
  String get clientName => throw _privateConstructorUsedError;
  @JsonKey(name: "clientEmail")
  String get clientEmail => throw _privateConstructorUsedError;
  @JsonKey(name: "status")
  String get status => throw _privateConstructorUsedError;
  @JsonKey(name: "senderAddress")
  Address get senderAddress => throw _privateConstructorUsedError;
  @JsonKey(name: "clientAddress")
  Address get clientAddress => throw _privateConstructorUsedError;
  @JsonKey(name: "items")
  List<Item> get items => throw _privateConstructorUsedError;
  @JsonKey(name: "total")
  double get total => throw _privateConstructorUsedError;

  /// Serializes this Invoice to a JSON map.
  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;

  /// Create a copy of Invoice
  /// with the given fields replaced by the non-null parameter values.
  @JsonKey(includeFromJson: false, includeToJson: false)
  $InvoiceCopyWith<Invoice> get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $InvoiceCopyWith<$Res> {
  factory $InvoiceCopyWith(Invoice value, $Res Function(Invoice) then) =
      _$InvoiceCopyWithImpl<$Res, Invoice>;
  @useResult
  $Res call(
      {@JsonKey(name: "id") String id,
      @JsonKey(name: "createdAt") String createdAt,
      @JsonKey(name: "paymentDue") DateTime paymentDue,
      @JsonKey(name: "description") String description,
      @JsonKey(name: "paymentTerms") int paymentTerms,
      @JsonKey(name: "clientName") String clientName,
      @JsonKey(name: "clientEmail") String clientEmail,
      @JsonKey(name: "status") String status,
      @JsonKey(name: "senderAddress") Address senderAddress,
      @JsonKey(name: "clientAddress") Address clientAddress,
      @JsonKey(name: "items") List<Item> items,
      @JsonKey(name: "total") double total});

  $AddressCopyWith<$Res> get senderAddress;
  $AddressCopyWith<$Res> get clientAddress;
}

/// @nodoc
class _$InvoiceCopyWithImpl<$Res, $Val extends Invoice>
    implements $InvoiceCopyWith<$Res> {
  _$InvoiceCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  /// Create a copy of Invoice
  /// with the given fields replaced by the non-null parameter values.
  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? createdAt = null,
    Object? paymentDue = null,
    Object? description = null,
    Object? paymentTerms = null,
    Object? clientName = null,
    Object? clientEmail = null,
    Object? status = null,
    Object? senderAddress = null,
    Object? clientAddress = null,
    Object? items = null,
    Object? total = null,
  }) {
    return _then(_value.copyWith(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      createdAt: null == createdAt
          ? _value.createdAt
          : createdAt // ignore: cast_nullable_to_non_nullable
              as String,
      paymentDue: null == paymentDue
          ? _value.paymentDue
          : paymentDue // ignore: cast_nullable_to_non_nullable
              as DateTime,
      description: null == description
          ? _value.description
          : description // ignore: cast_nullable_to_non_nullable
              as String,
      paymentTerms: null == paymentTerms
          ? _value.paymentTerms
          : paymentTerms // ignore: cast_nullable_to_non_nullable
              as int,
      clientName: null == clientName
          ? _value.clientName
          : clientName // ignore: cast_nullable_to_non_nullable
              as String,
      clientEmail: null == clientEmail
          ? _value.clientEmail
          : clientEmail // ignore: cast_nullable_to_non_nullable
              as String,
      status: null == status
          ? _value.status
          : status // ignore: cast_nullable_to_non_nullable
              as String,
      senderAddress: null == senderAddress
          ? _value.senderAddress
          : senderAddress // ignore: cast_nullable_to_non_nullable
              as Address,
      clientAddress: null == clientAddress
          ? _value.clientAddress
          : clientAddress // ignore: cast_nullable_to_non_nullable
              as Address,
      items: null == items
          ? _value.items
          : items // ignore: cast_nullable_to_non_nullable
              as List<Item>,
      total: null == total
          ? _value.total
          : total // ignore: cast_nullable_to_non_nullable
              as double,
    ) as $Val);
  }

  /// Create a copy of Invoice
  /// with the given fields replaced by the non-null parameter values.
  @override
  @pragma('vm:prefer-inline')
  $AddressCopyWith<$Res> get senderAddress {
    return $AddressCopyWith<$Res>(_value.senderAddress, (value) {
      return _then(_value.copyWith(senderAddress: value) as $Val);
    });
  }

  /// Create a copy of Invoice
  /// with the given fields replaced by the non-null parameter values.
  @override
  @pragma('vm:prefer-inline')
  $AddressCopyWith<$Res> get clientAddress {
    return $AddressCopyWith<$Res>(_value.clientAddress, (value) {
      return _then(_value.copyWith(clientAddress: value) as $Val);
    });
  }
}

/// @nodoc
abstract class _$$InvoiceImplCopyWith<$Res> implements $InvoiceCopyWith<$Res> {
  factory _$$InvoiceImplCopyWith(
          _$InvoiceImpl value, $Res Function(_$InvoiceImpl) then) =
      __$$InvoiceImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {@JsonKey(name: "id") String id,
      @JsonKey(name: "createdAt") String createdAt,
      @JsonKey(name: "paymentDue") DateTime paymentDue,
      @JsonKey(name: "description") String description,
      @JsonKey(name: "paymentTerms") int paymentTerms,
      @JsonKey(name: "clientName") String clientName,
      @JsonKey(name: "clientEmail") String clientEmail,
      @JsonKey(name: "status") String status,
      @JsonKey(name: "senderAddress") Address senderAddress,
      @JsonKey(name: "clientAddress") Address clientAddress,
      @JsonKey(name: "items") List<Item> items,
      @JsonKey(name: "total") double total});

  @override
  $AddressCopyWith<$Res> get senderAddress;
  @override
  $AddressCopyWith<$Res> get clientAddress;
}

/// @nodoc
class __$$InvoiceImplCopyWithImpl<$Res>
    extends _$InvoiceCopyWithImpl<$Res, _$InvoiceImpl>
    implements _$$InvoiceImplCopyWith<$Res> {
  __$$InvoiceImplCopyWithImpl(
      _$InvoiceImpl _value, $Res Function(_$InvoiceImpl) _then)
      : super(_value, _then);

  /// Create a copy of Invoice
  /// with the given fields replaced by the non-null parameter values.
  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? createdAt = null,
    Object? paymentDue = null,
    Object? description = null,
    Object? paymentTerms = null,
    Object? clientName = null,
    Object? clientEmail = null,
    Object? status = null,
    Object? senderAddress = null,
    Object? clientAddress = null,
    Object? items = null,
    Object? total = null,
  }) {
    return _then(_$InvoiceImpl(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      createdAt: null == createdAt
          ? _value.createdAt
          : createdAt // ignore: cast_nullable_to_non_nullable
              as String,
      paymentDue: null == paymentDue
          ? _value.paymentDue
          : paymentDue // ignore: cast_nullable_to_non_nullable
              as DateTime,
      description: null == description
          ? _value.description
          : description // ignore: cast_nullable_to_non_nullable
              as String,
      paymentTerms: null == paymentTerms
          ? _value.paymentTerms
          : paymentTerms // ignore: cast_nullable_to_non_nullable
              as int,
      clientName: null == clientName
          ? _value.clientName
          : clientName // ignore: cast_nullable_to_non_nullable
              as String,
      clientEmail: null == clientEmail
          ? _value.clientEmail
          : clientEmail // ignore: cast_nullable_to_non_nullable
              as String,
      status: null == status
          ? _value.status
          : status // ignore: cast_nullable_to_non_nullable
              as String,
      senderAddress: null == senderAddress
          ? _value.senderAddress
          : senderAddress // ignore: cast_nullable_to_non_nullable
              as Address,
      clientAddress: null == clientAddress
          ? _value.clientAddress
          : clientAddress // ignore: cast_nullable_to_non_nullable
              as Address,
      items: null == items
          ? _value._items
          : items // ignore: cast_nullable_to_non_nullable
              as List<Item>,
      total: null == total
          ? _value.total
          : total // ignore: cast_nullable_to_non_nullable
              as double,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$InvoiceImpl implements _Invoice {
  const _$InvoiceImpl(
      {@JsonKey(name: "id") required this.id,
      @JsonKey(name: "createdAt") required this.createdAt,
      @JsonKey(name: "paymentDue") required this.paymentDue,
      @JsonKey(name: "description") required this.description,
      @JsonKey(name: "paymentTerms") required this.paymentTerms,
      @JsonKey(name: "clientName") required this.clientName,
      @JsonKey(name: "clientEmail") required this.clientEmail,
      @JsonKey(name: "status") required this.status,
      @JsonKey(name: "senderAddress") required this.senderAddress,
      @JsonKey(name: "clientAddress") required this.clientAddress,
      @JsonKey(name: "items") required final List<Item> items,
      @JsonKey(name: "total") required this.total})
      : _items = items;

  factory _$InvoiceImpl.fromJson(Map<String, dynamic> json) =>
      _$$InvoiceImplFromJson(json);

  @override
  @JsonKey(name: "id")
  final String id;
  @override
  @JsonKey(name: "createdAt")
  final String createdAt;
  @override
  @JsonKey(name: "paymentDue")
  final DateTime paymentDue;
  @override
  @JsonKey(name: "description")
  final String description;
  @override
  @JsonKey(name: "paymentTerms")
  final int paymentTerms;
  @override
  @JsonKey(name: "clientName")
  final String clientName;
  @override
  @JsonKey(name: "clientEmail")
  final String clientEmail;
  @override
  @JsonKey(name: "status")
  final String status;
  @override
  @JsonKey(name: "senderAddress")
  final Address senderAddress;
  @override
  @JsonKey(name: "clientAddress")
  final Address clientAddress;
  final List<Item> _items;
  @override
  @JsonKey(name: "items")
  List<Item> get items {
    if (_items is EqualUnmodifiableListView) return _items;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_items);
  }

  @override
  @JsonKey(name: "total")
  final double total;

  @override
  String toString() {
    return 'Invoice(id: $id, createdAt: $createdAt, paymentDue: $paymentDue, description: $description, paymentTerms: $paymentTerms, clientName: $clientName, clientEmail: $clientEmail, status: $status, senderAddress: $senderAddress, clientAddress: $clientAddress, items: $items, total: $total)';
  }

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$InvoiceImpl &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.createdAt, createdAt) ||
                other.createdAt == createdAt) &&
            (identical(other.paymentDue, paymentDue) ||
                other.paymentDue == paymentDue) &&
            (identical(other.description, description) ||
                other.description == description) &&
            (identical(other.paymentTerms, paymentTerms) ||
                other.paymentTerms == paymentTerms) &&
            (identical(other.clientName, clientName) ||
                other.clientName == clientName) &&
            (identical(other.clientEmail, clientEmail) ||
                other.clientEmail == clientEmail) &&
            (identical(other.status, status) || other.status == status) &&
            (identical(other.senderAddress, senderAddress) ||
                other.senderAddress == senderAddress) &&
            (identical(other.clientAddress, clientAddress) ||
                other.clientAddress == clientAddress) &&
            const DeepCollectionEquality().equals(other._items, _items) &&
            (identical(other.total, total) || other.total == total));
  }

  @JsonKey(includeFromJson: false, includeToJson: false)
  @override
  int get hashCode => Object.hash(
      runtimeType,
      id,
      createdAt,
      paymentDue,
      description,
      paymentTerms,
      clientName,
      clientEmail,
      status,
      senderAddress,
      clientAddress,
      const DeepCollectionEquality().hash(_items),
      total);

  /// Create a copy of Invoice
  /// with the given fields replaced by the non-null parameter values.
  @JsonKey(includeFromJson: false, includeToJson: false)
  @override
  @pragma('vm:prefer-inline')
  _$$InvoiceImplCopyWith<_$InvoiceImpl> get copyWith =>
      __$$InvoiceImplCopyWithImpl<_$InvoiceImpl>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$InvoiceImplToJson(
      this,
    );
  }
}

abstract class _Invoice implements Invoice {
  const factory _Invoice(
      {@JsonKey(name: "id") required final String id,
      @JsonKey(name: "createdAt") required final String createdAt,
      @JsonKey(name: "paymentDue") required final DateTime paymentDue,
      @JsonKey(name: "description") required final String description,
      @JsonKey(name: "paymentTerms") required final int paymentTerms,
      @JsonKey(name: "clientName") required final String clientName,
      @JsonKey(name: "clientEmail") required final String clientEmail,
      @JsonKey(name: "status") required final String status,
      @JsonKey(name: "senderAddress") required final Address senderAddress,
      @JsonKey(name: "clientAddress") required final Address clientAddress,
      @JsonKey(name: "items") required final List<Item> items,
      @JsonKey(name: "total") required final double total}) = _$InvoiceImpl;

  factory _Invoice.fromJson(Map<String, dynamic> json) = _$InvoiceImpl.fromJson;

  @override
  @JsonKey(name: "id")
  String get id;
  @override
  @JsonKey(name: "createdAt")
  String get createdAt;
  @override
  @JsonKey(name: "paymentDue")
  DateTime get paymentDue;
  @override
  @JsonKey(name: "description")
  String get description;
  @override
  @JsonKey(name: "paymentTerms")
  int get paymentTerms;
  @override
  @JsonKey(name: "clientName")
  String get clientName;
  @override
  @JsonKey(name: "clientEmail")
  String get clientEmail;
  @override
  @JsonKey(name: "status")
  String get status;
  @override
  @JsonKey(name: "senderAddress")
  Address get senderAddress;
  @override
  @JsonKey(name: "clientAddress")
  Address get clientAddress;
  @override
  @JsonKey(name: "items")
  List<Item> get items;
  @override
  @JsonKey(name: "total")
  double get total;

  /// Create a copy of Invoice
  /// with the given fields replaced by the non-null parameter values.
  @override
  @JsonKey(includeFromJson: false, includeToJson: false)
  _$$InvoiceImplCopyWith<_$InvoiceImpl> get copyWith =>
      throw _privateConstructorUsedError;
}

Address _$AddressFromJson(Map<String, dynamic> json) {
  return _Address.fromJson(json);
}

/// @nodoc
mixin _$Address {
  @JsonKey(name: "street")
  String get street => throw _privateConstructorUsedError;
  @JsonKey(name: "city")
  String get city => throw _privateConstructorUsedError;
  @JsonKey(name: "postCode")
  String get postCode => throw _privateConstructorUsedError;
  @JsonKey(name: "country")
  String get country => throw _privateConstructorUsedError;

  /// Serializes this Address to a JSON map.
  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;

  /// Create a copy of Address
  /// with the given fields replaced by the non-null parameter values.
  @JsonKey(includeFromJson: false, includeToJson: false)
  $AddressCopyWith<Address> get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $AddressCopyWith<$Res> {
  factory $AddressCopyWith(Address value, $Res Function(Address) then) =
      _$AddressCopyWithImpl<$Res, Address>;
  @useResult
  $Res call(
      {@JsonKey(name: "street") String street,
      @JsonKey(name: "city") String city,
      @JsonKey(name: "postCode") String postCode,
      @JsonKey(name: "country") String country});
}

/// @nodoc
class _$AddressCopyWithImpl<$Res, $Val extends Address>
    implements $AddressCopyWith<$Res> {
  _$AddressCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  /// Create a copy of Address
  /// with the given fields replaced by the non-null parameter values.
  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? street = null,
    Object? city = null,
    Object? postCode = null,
    Object? country = null,
  }) {
    return _then(_value.copyWith(
      street: null == street
          ? _value.street
          : street // ignore: cast_nullable_to_non_nullable
              as String,
      city: null == city
          ? _value.city
          : city // ignore: cast_nullable_to_non_nullable
              as String,
      postCode: null == postCode
          ? _value.postCode
          : postCode // ignore: cast_nullable_to_non_nullable
              as String,
      country: null == country
          ? _value.country
          : country // ignore: cast_nullable_to_non_nullable
              as String,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$AddressImplCopyWith<$Res> implements $AddressCopyWith<$Res> {
  factory _$$AddressImplCopyWith(
          _$AddressImpl value, $Res Function(_$AddressImpl) then) =
      __$$AddressImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {@JsonKey(name: "street") String street,
      @JsonKey(name: "city") String city,
      @JsonKey(name: "postCode") String postCode,
      @JsonKey(name: "country") String country});
}

/// @nodoc
class __$$AddressImplCopyWithImpl<$Res>
    extends _$AddressCopyWithImpl<$Res, _$AddressImpl>
    implements _$$AddressImplCopyWith<$Res> {
  __$$AddressImplCopyWithImpl(
      _$AddressImpl _value, $Res Function(_$AddressImpl) _then)
      : super(_value, _then);

  /// Create a copy of Address
  /// with the given fields replaced by the non-null parameter values.
  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? street = null,
    Object? city = null,
    Object? postCode = null,
    Object? country = null,
  }) {
    return _then(_$AddressImpl(
      street: null == street
          ? _value.street
          : street // ignore: cast_nullable_to_non_nullable
              as String,
      city: null == city
          ? _value.city
          : city // ignore: cast_nullable_to_non_nullable
              as String,
      postCode: null == postCode
          ? _value.postCode
          : postCode // ignore: cast_nullable_to_non_nullable
              as String,
      country: null == country
          ? _value.country
          : country // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$AddressImpl implements _Address {
  const _$AddressImpl(
      {@JsonKey(name: "street") required this.street,
      @JsonKey(name: "city") required this.city,
      @JsonKey(name: "postCode") required this.postCode,
      @JsonKey(name: "country") required this.country});

  factory _$AddressImpl.fromJson(Map<String, dynamic> json) =>
      _$$AddressImplFromJson(json);

  @override
  @JsonKey(name: "street")
  final String street;
  @override
  @JsonKey(name: "city")
  final String city;
  @override
  @JsonKey(name: "postCode")
  final String postCode;
  @override
  @JsonKey(name: "country")
  final String country;

  @override
  String toString() {
    return 'Address(street: $street, city: $city, postCode: $postCode, country: $country)';
  }

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$AddressImpl &&
            (identical(other.street, street) || other.street == street) &&
            (identical(other.city, city) || other.city == city) &&
            (identical(other.postCode, postCode) ||
                other.postCode == postCode) &&
            (identical(other.country, country) || other.country == country));
  }

  @JsonKey(includeFromJson: false, includeToJson: false)
  @override
  int get hashCode => Object.hash(runtimeType, street, city, postCode, country);

  /// Create a copy of Address
  /// with the given fields replaced by the non-null parameter values.
  @JsonKey(includeFromJson: false, includeToJson: false)
  @override
  @pragma('vm:prefer-inline')
  _$$AddressImplCopyWith<_$AddressImpl> get copyWith =>
      __$$AddressImplCopyWithImpl<_$AddressImpl>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$AddressImplToJson(
      this,
    );
  }
}

abstract class _Address implements Address {
  const factory _Address(
      {@JsonKey(name: "street") required final String street,
      @JsonKey(name: "city") required final String city,
      @JsonKey(name: "postCode") required final String postCode,
      @JsonKey(name: "country") required final String country}) = _$AddressImpl;

  factory _Address.fromJson(Map<String, dynamic> json) = _$AddressImpl.fromJson;

  @override
  @JsonKey(name: "street")
  String get street;
  @override
  @JsonKey(name: "city")
  String get city;
  @override
  @JsonKey(name: "postCode")
  String get postCode;
  @override
  @JsonKey(name: "country")
  String get country;

  /// Create a copy of Address
  /// with the given fields replaced by the non-null parameter values.
  @override
  @JsonKey(includeFromJson: false, includeToJson: false)
  _$$AddressImplCopyWith<_$AddressImpl> get copyWith =>
      throw _privateConstructorUsedError;
}

Item _$ItemFromJson(Map<String, dynamic> json) {
  return _Item.fromJson(json);
}

/// @nodoc
mixin _$Item {
  @JsonKey(name: "name")
  String get name => throw _privateConstructorUsedError;
  @JsonKey(name: "quantity")
  int get quantity => throw _privateConstructorUsedError;
  @JsonKey(name: "price")
  double get price => throw _privateConstructorUsedError;
  @JsonKey(name: "total")
  double get total => throw _privateConstructorUsedError;

  /// Serializes this Item to a JSON map.
  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;

  /// Create a copy of Item
  /// with the given fields replaced by the non-null parameter values.
  @JsonKey(includeFromJson: false, includeToJson: false)
  $ItemCopyWith<Item> get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $ItemCopyWith<$Res> {
  factory $ItemCopyWith(Item value, $Res Function(Item) then) =
      _$ItemCopyWithImpl<$Res, Item>;
  @useResult
  $Res call(
      {@JsonKey(name: "name") String name,
      @JsonKey(name: "quantity") int quantity,
      @JsonKey(name: "price") double price,
      @JsonKey(name: "total") double total});
}

/// @nodoc
class _$ItemCopyWithImpl<$Res, $Val extends Item>
    implements $ItemCopyWith<$Res> {
  _$ItemCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  /// Create a copy of Item
  /// with the given fields replaced by the non-null parameter values.
  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
    Object? quantity = null,
    Object? price = null,
    Object? total = null,
  }) {
    return _then(_value.copyWith(
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      quantity: null == quantity
          ? _value.quantity
          : quantity // ignore: cast_nullable_to_non_nullable
              as int,
      price: null == price
          ? _value.price
          : price // ignore: cast_nullable_to_non_nullable
              as double,
      total: null == total
          ? _value.total
          : total // ignore: cast_nullable_to_non_nullable
              as double,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$ItemImplCopyWith<$Res> implements $ItemCopyWith<$Res> {
  factory _$$ItemImplCopyWith(
          _$ItemImpl value, $Res Function(_$ItemImpl) then) =
      __$$ItemImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {@JsonKey(name: "name") String name,
      @JsonKey(name: "quantity") int quantity,
      @JsonKey(name: "price") double price,
      @JsonKey(name: "total") double total});
}

/// @nodoc
class __$$ItemImplCopyWithImpl<$Res>
    extends _$ItemCopyWithImpl<$Res, _$ItemImpl>
    implements _$$ItemImplCopyWith<$Res> {
  __$$ItemImplCopyWithImpl(_$ItemImpl _value, $Res Function(_$ItemImpl) _then)
      : super(_value, _then);

  /// Create a copy of Item
  /// with the given fields replaced by the non-null parameter values.
  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
    Object? quantity = null,
    Object? price = null,
    Object? total = null,
  }) {
    return _then(_$ItemImpl(
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      quantity: null == quantity
          ? _value.quantity
          : quantity // ignore: cast_nullable_to_non_nullable
              as int,
      price: null == price
          ? _value.price
          : price // ignore: cast_nullable_to_non_nullable
              as double,
      total: null == total
          ? _value.total
          : total // ignore: cast_nullable_to_non_nullable
              as double,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$ItemImpl implements _Item {
  const _$ItemImpl(
      {@JsonKey(name: "name") required this.name,
      @JsonKey(name: "quantity") required this.quantity,
      @JsonKey(name: "price") required this.price,
      @JsonKey(name: "total") required this.total});

  factory _$ItemImpl.fromJson(Map<String, dynamic> json) =>
      _$$ItemImplFromJson(json);

  @override
  @JsonKey(name: "name")
  final String name;
  @override
  @JsonKey(name: "quantity")
  final int quantity;
  @override
  @JsonKey(name: "price")
  final double price;
  @override
  @JsonKey(name: "total")
  final double total;

  @override
  String toString() {
    return 'Item(name: $name, quantity: $quantity, price: $price, total: $total)';
  }

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$ItemImpl &&
            (identical(other.name, name) || other.name == name) &&
            (identical(other.quantity, quantity) ||
                other.quantity == quantity) &&
            (identical(other.price, price) || other.price == price) &&
            (identical(other.total, total) || other.total == total));
  }

  @JsonKey(includeFromJson: false, includeToJson: false)
  @override
  int get hashCode => Object.hash(runtimeType, name, quantity, price, total);

  /// Create a copy of Item
  /// with the given fields replaced by the non-null parameter values.
  @JsonKey(includeFromJson: false, includeToJson: false)
  @override
  @pragma('vm:prefer-inline')
  _$$ItemImplCopyWith<_$ItemImpl> get copyWith =>
      __$$ItemImplCopyWithImpl<_$ItemImpl>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$ItemImplToJson(
      this,
    );
  }
}

abstract class _Item implements Item {
  const factory _Item(
      {@JsonKey(name: "name") required final String name,
      @JsonKey(name: "quantity") required final int quantity,
      @JsonKey(name: "price") required final double price,
      @JsonKey(name: "total") required final double total}) = _$ItemImpl;

  factory _Item.fromJson(Map<String, dynamic> json) = _$ItemImpl.fromJson;

  @override
  @JsonKey(name: "name")
  String get name;
  @override
  @JsonKey(name: "quantity")
  int get quantity;
  @override
  @JsonKey(name: "price")
  double get price;
  @override
  @JsonKey(name: "total")
  double get total;

  /// Create a copy of Item
  /// with the given fields replaced by the non-null parameter values.
  @override
  @JsonKey(includeFromJson: false, includeToJson: false)
  _$$ItemImplCopyWith<_$ItemImpl> get copyWith =>
      throw _privateConstructorUsedError;
}
