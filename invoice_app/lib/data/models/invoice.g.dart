// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'invoice.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$InvoiceImpl _$$InvoiceImplFromJson(Map<String, dynamic> json) =>
    _$InvoiceImpl(
      id: json['id'] as String,
      createdAt: json['createdAt'] as String,
      paymentDue: DateTime.parse(json['paymentDue'] as String),
      description: json['description'] as String,
      paymentTerms: (json['paymentTerms'] as num).toInt(),
      clientName: json['clientName'] as String,
      clientEmail: json['clientEmail'] as String,
      status: json['status'] as String,
      senderAddress:
          Address.fromJson(json['senderAddress'] as Map<String, dynamic>),
      clientAddress:
          Address.fromJson(json['clientAddress'] as Map<String, dynamic>),
      items: (json['items'] as List<dynamic>)
          .map((e) => Item.fromJson(e as Map<String, dynamic>))
          .toList(),
      total: (json['total'] as num).toDouble(),
    );

Map<String, dynamic> _$$InvoiceImplToJson(_$InvoiceImpl instance) =>
    <String, dynamic>{
      'id': instance.id,
      'createdAt': instance.createdAt,
      'paymentDue': instance.paymentDue.toIso8601String(),
      'description': instance.description,
      'paymentTerms': instance.paymentTerms,
      'clientName': instance.clientName,
      'clientEmail': instance.clientEmail,
      'status': instance.status,
      'senderAddress': instance.senderAddress,
      'clientAddress': instance.clientAddress,
      'items': instance.items,
      'total': instance.total,
    };

_$AddressImpl _$$AddressImplFromJson(Map<String, dynamic> json) =>
    _$AddressImpl(
      street: json['street'] as String,
      city: json['city'] as String,
      postCode: json['postCode'] as String,
      country: json['country'] as String,
    );

Map<String, dynamic> _$$AddressImplToJson(_$AddressImpl instance) =>
    <String, dynamic>{
      'street': instance.street,
      'city': instance.city,
      'postCode': instance.postCode,
      'country': instance.country,
    };

_$ItemImpl _$$ItemImplFromJson(Map<String, dynamic> json) => _$ItemImpl(
      name: json['name'] as String,
      quantity: (json['quantity'] as num).toInt(),
      price: (json['price'] as num).toDouble(),
      total: (json['total'] as num).toDouble(),
    );

Map<String, dynamic> _$$ItemImplToJson(_$ItemImpl instance) =>
    <String, dynamic>{
      'name': instance.name,
      'quantity': instance.quantity,
      'price': instance.price,
      'total': instance.total,
    };
