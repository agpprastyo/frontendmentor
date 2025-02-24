// To parse this JSON data, do
//
//     final invoice = invoiceFromJson(jsonString);

import 'dart:convert';

import 'package:freezed_annotation/freezed_annotation.dart';

part 'invoice.freezed.dart';
part 'invoice.g.dart';

List<Invoice> invoiceFromJson(String str) =>
    List<Invoice>.from(json.decode(str).map((x) => Invoice.fromJson(x)));

String invoiceToJson(List<Invoice> data) =>
    json.encode(List<dynamic>.from(data.map((x) => x.toJson())));

@freezed
class Invoice with _$Invoice {
  const factory Invoice({
    @JsonKey(name: "id") required String id,
    @JsonKey(name: "createdAt") required String createdAt,
    @JsonKey(name: "paymentDue") required DateTime paymentDue,
    @JsonKey(name: "description") required String description,
    @JsonKey(name: "paymentTerms") required int paymentTerms,
    @JsonKey(name: "clientName") required String clientName,
    @JsonKey(name: "clientEmail") required String clientEmail,
    @JsonKey(name: "status") required String status,
    @JsonKey(name: "senderAddress") required Address senderAddress,
    @JsonKey(name: "clientAddress") required Address clientAddress,
    @JsonKey(name: "items") required List<Item> items,
    @JsonKey(name: "total") required double total,
  }) = _Invoice;

  factory Invoice.fromJson(Map<String, dynamic> json) =>
      _$InvoiceFromJson(json);
}

@freezed
class Address with _$Address {
  const factory Address({
    @JsonKey(name: "street") required String street,
    @JsonKey(name: "city") required String city,
    @JsonKey(name: "postCode") required String postCode,
    @JsonKey(name: "country") required String country,
  }) = _Address;

  factory Address.fromJson(Map<String, dynamic> json) =>
      _$AddressFromJson(json);
}

@freezed
class Item with _$Item {
  const factory Item({
    @JsonKey(name: "name") required String name,
    @JsonKey(name: "quantity") required int quantity,
    @JsonKey(name: "price") required double price,
    @JsonKey(name: "total") required double total,
  }) = _Item;

  factory Item.fromJson(Map<String, dynamic> json) => _$ItemFromJson(json);
}
