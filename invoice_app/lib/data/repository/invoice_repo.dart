import 'dart:convert';

import 'package:flutter/services.dart';

import '../models/invoice.dart';

class InvoiceRepository {
  final List<Invoice> _invoices = [];

  // Load invoices from a JSON file (local asset)
  Future<List<Invoice>> loadInvoicesFromAsset() async {
    try {
      await Future.delayed(const Duration(seconds: 2));
      final String jsonData =
          await rootBundle.loadString('data.json'); // Load JSON file
      final List<dynamic> parsedData =
          json.decode(jsonData); // Decode JSON data

      // Map parsed data to Invoice objects and add them to the list
      _invoices
          .addAll(parsedData.map((data) => Invoice.fromJson(data)).toList());

      return List.unmodifiable(_invoices); // Return a read-only copy
    } catch (e) {
      // Log the error or handle it appropriately
      throw Exception('Failed to load invoices: $e');
    }
  }

  // Fetch all invoices
  List<Invoice> get invoices => List.unmodifiable(_invoices);

  // Fetch invoice by ID
  Invoice? getInvoiceById(String id) {
    final matchingInvoices = _invoices.where((invoice) => invoice.id == id);
    return matchingInvoices.isNotEmpty ? matchingInvoices.first : null;
  }

  // Add a new invoice
  void addInvoice(Invoice invoice) {
    _invoices.add(invoice);
  }

  // Update an existing invoice
  void updateInvoice(String id, Invoice updatedInvoice) {
    final int index = _invoices.indexWhere((invoice) => invoice.id == id);
    if (index != -1) {
      _invoices[index] = updatedInvoice;
    }
  }

  // Delete an invoice by ID
  void deleteInvoice(String id) {
    _invoices.removeWhere((invoice) => invoice.id == id);
  }
}
