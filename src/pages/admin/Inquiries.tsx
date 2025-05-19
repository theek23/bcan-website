import React, { useState, useEffect } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { inquiryService } from "../../services/inquiry.service";
import { InquiryWithStatus, InquiryType } from "../../types/inquiry.types";

const Inquiries = () => {
  const [inquiries, setInquiries] = useState<InquiryWithStatus[]>([]);
  const [selectedInquiry, setSelectedInquiry] =
    useState<InquiryWithStatus | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [typeFilter, setTypeFilter] = useState<string>("");

  const fetchInquiries = async (page: number = 1) => {
    try {
      setIsLoading(true);
      setError("");
      const response = await inquiryService.getAllInquiries(page);
      setInquiries(response.data as InquiryWithStatus[]);
      setTotalPages(response.totalPages);
      setCurrentPage(response.page);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to fetch inquiries";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries(currentPage);
  }, [currentPage]);

  // Toggle inquiry details
  const toggleDetails = (inquiry: InquiryWithStatus) => {
    if (selectedInquiry && selectedInquiry.id === inquiry.id) {
      setSelectedInquiry(null);
    } else {
      setSelectedInquiry(inquiry);
    }
  };

  // Filter inquiries based on search term and filters
  const filteredInquiries = inquiries.filter((inquiry) => {
    const matchesSearch =
      inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.subject?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.message?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = !statusFilter || inquiry.status === statusFilter;
    const matchesType = !typeFilter || inquiry.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Inquiries Management</h1>
        <div className="flex gap-2">
          <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            Export
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {/* Search and Filter */}
      <div className="bg-gray-800 rounded-lg p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search inquiries..."
              className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <select
              className="px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">All Statuses</option>
              <option value="NEW">New</option>
              <option value="PENDING">Pending</option>
            </select>
            <select
              className="px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="">All Types</option>
              {Object.values(InquiryType).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Selected Inquiry Details */}
      {selectedInquiry && (
        <div className="bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold">
                {selectedInquiry.subject || "No Subject"}
              </h3>
              <p className="text-gray-400">
                From: {selectedInquiry.name} ({selectedInquiry.email})
              </p>
              <p className="text-gray-400">
                Date: {new Date(selectedInquiry.createdAt).toLocaleDateString()}
              </p>
              <p className="text-gray-400">Type: {selectedInquiry.type}</p>
            </div>
            <div className="flex items-center">
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  selectedInquiry.status === "NEW"
                    ? "bg-yellow-900 text-yellow-300"
                    : "bg-blue-900 text-blue-300"
                }`}
              >
                {selectedInquiry.status}
              </span>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg mb-4">
            <p>{selectedInquiry.message || "No message provided"}</p>
          </div>
          {selectedInquiry.company && (
            <div className="mb-4">
              <h4 className="font-bold mb-2">Company</h4>
              <p>{selectedInquiry.company}</p>
            </div>
          )}
          {selectedInquiry.investmentRange && (
            <div className="mb-4">
              <h4 className="font-bold mb-2">Investment Range</h4>
              <p>{selectedInquiry.investmentRange}</p>
            </div>
          )}
          {selectedInquiry.feedbackType && (
            <div className="mb-4">
              <h4 className="font-bold mb-2">Feedback Type</h4>
              <p>{selectedInquiry.feedbackType}</p>
            </div>
          )}
          {selectedInquiry.additionalInfo && (
            <div className="mb-4">
              <h4 className="font-bold mb-2">Additional Information</h4>
              <p>{selectedInquiry.additionalInfo}</p>
            </div>
          )}
        </div>
      )}

      {/* Inquiries Table */}
      <div className="bg-gray-800 rounded-lg shadow-md p-6">
        {isLoading ? (
          <div className="text-center py-4">Loading...</div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-gray-400">ID</th>
                    <th className="px-4 py-2 text-left text-gray-400">Name</th>
                    <th className="px-4 py-2 text-left text-gray-400">Type</th>
                    <th className="px-4 py-2 text-left text-gray-400">
                      Subject
                    </th>
                    <th className="px-4 py-2 text-left text-gray-400">Date</th>
                    <th className="px-4 py-2 text-left text-gray-400">
                      Status
                    </th>
                    <th className="px-4 py-2 text-left text-gray-400">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInquiries.map((inquiry) => (
                    <tr
                      key={inquiry.id}
                      className={`border-t border-gray-700 ${
                        selectedInquiry && selectedInquiry.id === inquiry.id
                          ? "bg-gray-700"
                          : ""
                      }`}
                    >
                      <td className="px-4 py-3">{inquiry.id}</td>
                      <td className="px-4 py-3">
                        <div>
                          <div>{inquiry.name}</div>
                          <div className="text-gray-400 text-sm">
                            {inquiry.email}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">{inquiry.type}</td>
                      <td className="px-4 py-3">
                        {inquiry.subject || "No Subject"}
                      </td>
                      <td className="px-4 py-3">
                        {new Date(inquiry.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            inquiry.status === "NEW"
                              ? "bg-yellow-900 text-yellow-300"
                              : "bg-blue-900 text-blue-300"
                          }`}
                        >
                          {inquiry.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex space-x-2">
                          <button
                            className="p-1 text-blue-400 hover:text-blue-300"
                            onClick={() => toggleDetails(inquiry)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-6">
              <div className="text-sm text-gray-400">
                Showing {(currentPage - 1) * 10 + 1} to{" "}
                {Math.min(currentPage * 10, totalPages * 10)} of{" "}
                {totalPages * 10} entries
              </div>
              <div className="flex space-x-1">
                <button
                  className="px-3 py-1 bg-gray-700 rounded-lg text-gray-300 hover:bg-gray-600 disabled:opacity-50"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      className={`px-3 py-1 rounded-lg ${
                        currentPage === page
                          ? "bg-blue-600 text-white"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  )
                )}
                <button
                  className="px-3 py-1 bg-gray-700 rounded-lg text-gray-300 hover:bg-gray-600 disabled:opacity-50"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  );
};

export default Inquiries;
