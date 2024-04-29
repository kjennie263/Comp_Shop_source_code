import React from "react";
import { Link } from "react-router-dom";

const CategoriesTable = () => {
  return (
    <div className="col-md-12 col-lg-8">
      <table className="table">
        <thead>
          <tr>
            <th>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </th>
            <th>ID</th>
            <th>Категория аты</th>
            <th>Категория сипаттамасы</th>
            <th className="text-end">Өзгерту</th>
          </tr>
        </thead>
        {/* Table Data */}
        <tbody>
          <tr>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </td>
            <td>1</td>
            <td>
              <b>Видеокарталар</b>
            </td>
            <td>GPU сапалы карталары</td>
            <td className="text-end">
              <div className="dropdown">
                <Link
                  to="#"
                  data-bs-toggle="dropdown"
                  className="btn btn-light"
                >
                  <i className="fas fa-ellipsis-h"></i>
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Жаңарту
                  </Link>
                  <Link className="dropdown-item text-danger" to="#">
                    Жою
                  </Link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </td>
            <td>2</td>
            <td>
              <b>Принтерлар</b>
            </td>
            <td>Түсті суреттерді ақ қағазға шығаратын принтерлар</td>

            <td className="text-end">
              <div className="dropdown">
                <Link
                  to="#"
                  data-bs-toggle="dropdown"
                  className="btn btn-light"
                >
                  <i className="fas fa-ellipsis-h"></i>
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Жаңарту
                  </Link>
                  <Link className="dropdown-item text-danger" to="#">
                    Жою
                  </Link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </td>
            <td>3</td>
            <td>
              <b>Пернетақталар</b>
            </td>
            <td>Ыңғайлы, механикалық пернетақталар</td>

            <td className="text-end">
              <div className="dropdown">
                <Link
                  to="#"
                  data-bs-toggle="dropdown"
                  className="btn btn-light"
                >
                  <i className="fas fa-ellipsis-h"></i>
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Жаңарту
                  </Link>
                  <Link className="dropdown-item text-danger" to="#">
                    Жою
                  </Link>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesTable;
